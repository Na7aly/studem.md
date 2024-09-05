import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentful/contentfulClient'; // Adjust path if necessary
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './ArticleDetail.module.css';

const ArticleDetail = () => {
  const { id } = useParams(); // This will get the article ID from the URL
  const [article, setArticle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const data = await client.getEntry(id); // Fetch article by ID
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    getArticle();
  }, [id]);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{article.fields.studemtitle}</h1>
      {article.fields.studemfoto && (
        <img
          src={article.fields.studemfoto.fields.file.url}
          alt={article.fields.studemfoto.fields.title || 'Article image'}
          className={styles.articleImage}
          onClick={() => handleImageClick(article.fields.studemfoto.fields.file.url)}
        />
      )}
      <div className={styles.content}>
        {documentToReactComponents(article.fields.studemtext)}
      </div>
      {/* Additional photos */}
      {article.fields.manyphoto && article.fields.manyphoto.map((photo, index) => (
        <img
          key={index}
          src={photo.fields.file.url}
          alt={`Additional photo ${index}`}
          className={styles.additionalPhoto}
          onClick={() => handleImageClick(photo.fields.file.url)}
        />
      ))}
      {/* Display Author and Date */}
      <div className={styles.meta}>
        {article.fields.autor && <p>Autor: {article.fields.autor}</p>} 
        {article.fields.data && (
          <p className={styles.meta} >Publicat pe: {new Date(article.fields.data).toLocaleDateString()}</p>
        )}
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <img src={selectedImage} alt="Selected" className={styles.modalImage} />
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
