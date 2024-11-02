import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentful/contentfulClient'; 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './ArticleDetail.module.css';
import Article5 from './Article5';

const ArticleDetail = () => {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const data = await client.getEntry(id); 
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
      <div className={styles.contentWrapper}>
        <div className={styles.articleDetail}>
          <h1 className={styles.title}>{article.fields.studemtitle}</h1>
          {article.fields.studemfoto && (
            <img
              src={article.fields.studemfoto.fields.file.url}
              alt={article.fields.studemfoto.fields.title}
              className={styles.articleImage}
              onClick={() => handleImageClick(article.fields.studemfoto.fields.file.url)}
            />
          )}
          <div className={styles.content}>
            {documentToReactComponents(article.fields.studemtext)}
          </div>
          
          {article.fields.manyphoto && article.fields.manyphoto.map((photo, index) => (
            <img
              key={index}
              src={photo.fields.file.url}
              alt={`Descriere imagine ${index + 1}`}
              className={styles.additionalPhoto}
              onClick={() => handleImageClick(photo.fields.file.url)}
            />
          ))}
          
          <div className={styles.meta}>
            {article.fields.autor && <p>Autor: {article.fields.autor}</p>} 
            {article.fields.data && (
              <p className={styles.meta}>Publicat pe: {new Date(article.fields.data).toLocaleDateString()}</p>
            )}
          </div>

          
          {selectedImage && (
            <div className={styles.modal} onClick={handleCloseModal} role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
              <button onClick={handleCloseModal} className={styles.closeButton} aria-label="Close preview">
                X
              </button>
              <img
                src={selectedImage}
                alt="img"
                className={styles.modalImage}
                id="modal-description"
              />
            </div>
          )}
        </div>

        
        <div className={styles.article5Wrapper}>
          <Article5 />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
