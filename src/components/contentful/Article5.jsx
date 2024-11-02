import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { fetchArticles } from '../contentful/api';
import styles from './Article5.module.css';

const ArticlesListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    getArticles();
  }, []);

  const latestArticles = articles.slice(-5);

  return (
    <div id="ArticlesList" className={styles.container}>
      <h2 className={styles.latestArticlesTitle}>Cele mai recente articole</h2>
      <div className={styles.latestArticlesGrid}>
        {latestArticles.map((article) => (
          <div key={article.sys.id} className={styles.latestArticleCard}>
            {article.fields.studemfoto && (
              <img
                src={article.fields.studemfoto.fields.file.url}
                alt={article.fields.studemfoto.fields.title || 'Latest article image'}
                className={styles.latestArticleImage}
              />
            )}
            <Link to={`/article/${article.sys.id}`} className={styles.latestArticleTitle}>
              {article.fields.studemtitle}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesListPage;
