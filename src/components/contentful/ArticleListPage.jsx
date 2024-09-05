import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../contentful/api';
import styles from './ArticleListPage.module.css';

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

  const getFirstParagraph = (richTextContent) => {
    const paragraph = richTextContent?.content?.find((node) => node.nodeType === 'paragraph');
    return paragraph ? paragraph.content[0].value : '';
  };

  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <div key={article.sys.id} className={styles.articleItem}>
          {article.fields.studemfoto && (
            <img
              src={article.fields.studemfoto.fields.file.url}
              alt={article.fields.studemfoto.fields.title || 'Article image'}
              className={styles.articleImage}
            />
          )}
          <div className={styles.articleText}>
            <h2 className={styles.articleTitle}>{article.fields.studemtitle}</h2>
            <p className={styles.articleExcerpt}>
              {getFirstParagraph(article.fields.studemtext)}
            </p>
            <div className={styles.articleMeta}>
            {article.fields.autor && <p>Autor: {article.fields.autor}</p>}
            {article.fields.data && (
              <p>Publicat pe: {new Date(article.fields.data).toLocaleDateString()}</p>
            )}
          </div>
            <Link to={`/article/${article.sys.id}`} className={styles.readMore}>
              Citește întreg articolul
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesListPage;
