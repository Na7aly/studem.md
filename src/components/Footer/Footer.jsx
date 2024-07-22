import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.copyright}>
          © Copyright STUDEM
        </span>
        <span className={styles.designed}>
          Designed by <a href="#">Cazacu Natalia</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
