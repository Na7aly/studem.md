import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.textSection}>
        <h2>Activitățile noastre</h2>
        <p>Abonează-te pentru a fi la curent cu activitățile noastre</p>
      </div>
      <div className={styles.formSection}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.emailInput}
        />
        <button className={styles.subscribeBtn}>Abonează-te</button>
      </div>
    </div>
  );
};

export default Newsletter;
