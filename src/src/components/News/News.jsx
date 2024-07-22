import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './News.module.css';

const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://your-wordpress-site.com/wp-json/wp/v2/posts');
        setPosts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error.message}</div>;

  return (
    <div className={styles.news}>
      <h2>Latest News</h2>
      {posts.map(post => (
        <div key={post.id} className={styles.post}>
          <h3>{post.title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <a href={post.link} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default News;
