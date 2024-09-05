// src/components/ArticlePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Pentru a lua ID-ul din URL
import { fetchArticles } from '../contentful/api'; // Funcția de fetch
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './ArticlePage.module.css';

const ArticlePage = () => {
  const { id } = useParams(); // Preia ID-ul articolului din URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const data = await fetchArticles(); // Fetch all articles
        const selectedArticle = data.find((article) => article.sys.id === id); // Găsește articolul curent
        setArticle(selectedArticle);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    getArticle();
  }, [id]);

  return (
    <div className={styles.container}>
      {article ? (
        <>
          {/* Secțiunea de sus cu imagine și titlu */}
          <div className={styles.articleHeader}>
            {/* Imaginea principală a articolului */}
            {article.fields.studemfoto && (
              <img
                src={article.fields.studemfoto.fields.file.url}
                alt={article.fields.studemfoto.fields.title || 'Article image'}
                className={styles.articleImageMain}
              />
            )}

            {/* Titlul articolului */}
            <h1 className={styles.articleTitle}>{article.fields.studemtitle}</h1>
          </div>

          {/* Conținutul articolului (textul) */}
          <div className={styles.articleContent}>
            {documentToReactComponents(article.fields.studemtext)}
          </div>

          {/* Afișarea mai multor imagini (manyphoto) */}
          {article.fields.manyphoto && (
            <div className={styles.additionalPhotos}>
              {article.fields.manyphoto.map((photo, index) => (
                <img
                  key={index}
                  src={photo.fields.file.url}
                  alt={photo.fields.title || `Additional photo ${index + 1}`}
                  className={styles.additionalPhoto}
                />
              ))}
            </div>
          )}

          {/* Afișarea autorului */}
          {article.fields.autor && (
            <p className={styles.articleAuthor}>Autor: {article.fields.autor}</p>
          )}

          {/* Afișarea datei articolului */}
          {article.fields.data && (
            <p className={styles.articleDate}>
              Publicat pe: {new Date(article.fields.data).toLocaleDateString()}
            </p>
          )}
        </>
      ) : (
        <p>Se încarcă articolul...</p>
      )}
    </div>
  );
};

export default ArticlePage;
