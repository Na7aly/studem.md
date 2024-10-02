import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../contentful/api';
import styles from './ArticleListPage.module.css';

const ArticlesListPage = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(9); 
  const [pagesToShow] = useState(6); 

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


  const indexOfLastArticle = currentPage * articlesPerPage;
  
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

 
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
  
  
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div id="ArticlesList" className={styles.container}>
      <div className={styles.articlesGrid}>
        {currentArticles.map((article) => (
          <div key={article.sys.id} className={styles.articleCard}>
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

      <div className={styles.pagination}>
        
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          &laquo;
        </button>

       
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`${styles.pageButton} ${currentPage === pageNumber ? styles.active : ''}`}
          >
            {pageNumber}
          </button>
        ))}

        
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default ArticlesListPage;
