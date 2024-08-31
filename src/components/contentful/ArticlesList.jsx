import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../contentful/api'; // Ajustează calea dacă este necesar
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './ArticlesList.module.css';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        console.log('Fetched articles:', data); // Debug
        setArticles(data);
        if (data.length > 0) {
          setSelectedArticle(data[0]); 
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    getArticles();
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);

    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainArticle}>
        {selectedArticle && (
          <div className={styles.activeArticle}>
            {selectedArticle.fields.studemfoto && (
              <img
                src={selectedArticle.fields.studemfoto.fields.file.url}
                alt={selectedArticle.fields.studemfoto.fields.title || 'Article image'}
                className={styles.articleImageMain}
              />
            )}
            <h2 className={styles.articleTitle}>{selectedArticle.fields.studemtitle}</h2>
            <div className={styles.articleContent}>
              {selectedArticle.fields.studemtext
                ? documentToReactComponents(selectedArticle.fields.studemtext)
                : 'No content available'}
            </div>
          </div>
        )}
      </div>
      <div className={styles.sidebar}>
        {articles.slice(1).map((article, index) => (
          <div key={index} className={styles.articleItem} onClick={() => handleArticleClick(article)}>
            {article.fields.studemfoto && (
              <img
                src={article.fields.studemfoto.fields.file.url}
                alt={article.fields.studemfoto.fields.title || 'Article image'}
                className={styles.articleImage}
              />
            )}
            <div className={styles.articleTitle}>{article.fields.studemtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
