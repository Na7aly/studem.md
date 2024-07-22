import React from 'react';
import styles from './About.module.css';
import leftImage from '../img/studem.jpg';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftImageContainer}>
        <img src={leftImage} alt="Left" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>Tinerii STUDEM sunt Tineri care Contribuie în societate</h2>
        <p>Centrul de Tineret STUDEM este o structură de auto guvernanță a tinerilor din municipiul Bălți înființată în cadrul unui parteneriat Moldo-Danez de lungă durată. Scopul de bază al Centrului este consolidarea democraţiei în Republica Moldova prin deprinderea cu principiile democratice în rândul tinerilor</p>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <i className={`fas fa-fingerprint ${styles.fingerprint}`} />
            <h2>Viziune</h2>
            <p>Un Centru de Tineret STUDEM în fiecare localitate din Republica Moldova</p>
          </div>
          <div className={styles.icon}>
            <i className={`fas fa-gift ${styles.gift}`} />
            <h2>Misiune</h2>
            <p>Creăm un mediu democratic în care tinerii devin responsabili, implicați construindu-și viitorul propriu</p>
          </div>
          <div className={styles.icon}>
            <i className={`fas fa-gear ${styles.gear}`} />
            <h2>Scop</h2>
            <p>Facilitarea dezvoltării personale și sociale a tinerilor, și îndrumarea spre realizezarea potențialului, obținerea cunoștințelor, abilităților și aptitudinilor necesare pentru integrarea lor reușită în societate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
