import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../contentful/api';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './HomePagee.module.css';

const HomePage = () => {
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

  // Funcție pentru extragerea primului paragraf din rich text
  const getFirstParagraph = (richTextContent) => {
    const paragraph = richTextContent?.content?.find((node) => node.nodeType === 'paragraph');
    return paragraph ? paragraph.content[0].value : ''; // Returnează conținutul primului paragraf
  };

  // Sortare articole pentru a obține ultimul postat
  const latestArticle = articles.length > 0 ? articles[0] : null;

  return (
    <div className={styles.container}>
      {/* Ultimul articol */}
      {latestArticle && (
        <div className={styles.latestArticle}>
          {latestArticle.fields.studemfoto && (
            <img
              src={latestArticle.fields.studemfoto.fields.file.url}
              alt={latestArticle.fields.studemfoto.fields.title || 'Article image'}
              className={styles.latestArticleImage}
            />
          )}
          <div className={styles.latestArticleContentWrapper}>
            <h1 className={styles.latestArticleTitle}>{latestArticle.fields.studemtitle}</h1>
            <div className={styles.latestArticleContent}>
              {/* Afișează doar primul paragraf */}
              <p>{getFirstParagraph(latestArticle.fields.studemtext)}</p>
            </div>
            
            <div className={styles.meta}>
            <div className={styles.authorDate}>
                {latestArticle.fields.autor && <p>Autor: {latestArticle.fields.autor}</p>}
                {latestArticle.fields.data && (
                  <p>Publicat pe: {new Date(latestArticle.fields.data).toLocaleDateString()}</p>
                )}
              </div>
              <Link to={`/article/${latestArticle.sys.id}`} className={styles.readMore}>
                Citește întreg articolul
              </Link>
              <br />
              <Link to="/articles" className={styles.viewMoreArticles}>
                Citește mai multe articole
              </Link>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
