import React from 'react';
import PropTypes from 'prop-types';
import styles from './TestimonialCard.module.css'; // Verifică că ai acest fișier CSS

function TestimonialCard({ name, role, quote, imageUrl }) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.role}>{role}</p>
        <div className={styles.quoteContainer}>
          <span className={styles.quoteMark}>“</span>
          <p className={styles.quote}>{quote}</p>
          <span className={styles.quoteMark}>”</span>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default TestimonialCard;
