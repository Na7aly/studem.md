import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <span className={styles.copyright}>
          © Copyright STUDEM
        </span>
        <span className={styles.designed}>
        Designed by <span>Cazacu Natalia</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
