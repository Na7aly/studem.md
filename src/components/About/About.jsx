import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import leftImage1 from '../../img/leftImage1.jpg';
import leftImage2 from '../../img/leftImage2.jpg';
import leftImage3 from '../../img/leftImage3.jpg';
import leftImage4 from '../../img/leftImage4.jpg';
import leftImage5 from '../../img/leftImage5.jpg';
import leftImage6 from '../../img/leftImage6.jpg';
import leftImage7 from '../../img/leftImage7.jpg';
// import leftImage8 from '../img/leftImage8.jpg';
// import leftImage9 from '../../img/leftImage9.jpg';
import leftImage10 from '../../img/leftImage10.jpg';
import leftImage11 from '../../img/leftImage11.jpg';
import leftImage12 from '../../img/leftImage12.jpg';

const images = [
  leftImage1,
  leftImage2,
  leftImage3,
  leftImage4,
  leftImage5,
  leftImage6,
  leftImage7,
  leftImage10,
  leftImage11,
  leftImage12,
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Schimbă imaginea la fiecare 2 secunde

    return () => clearInterval(intervalId); // Curăță intervalul când componenta este demontată
  }, []);

  return (
    <div className={styles.containerSpace} >
      <div className={styles.container}>
      <div className={styles.leftImageContainer}>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.conName}>STUDEM: TINERII CARE FAC DIFERENȚA ÎN COMUNITATE</h2>
        <p>
          Centrul de Tineret STUDEM este o structură de auto guvernanță a tinerilor din municipiul Bălți înființată în cadrul unui parteneriat Moldo-Danez de lungă durată. Scopul de bază al Centrului este consolidarea democraţiei în Republica Moldova prin deprinderea cu principiile democratice în rândul tinerilor
        </p>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <i className={`fas fa-fingerprint ${styles.iconImage}`} />
            <div className={styles.iconText}>
              <h2>VIZIUNE</h2>
              <p>Un Centru de Tineret STUDEM în fiecare localitate din Republica Moldova</p>
            </div>
          </div>
          <div className={styles.icon}>
            <i className={`fas fa-gift ${styles.iconImage}`} />
            <div className={styles.iconText}>
              <h2>MISIUNE</h2>
              <p>Creăm un mediu democratic în care tinerii devin responsabili, implicați construindu-și viitorul propriu</p>
            </div>
          </div>
          <div className={styles.icon}>
            <i className={`fas fa-gear ${styles.iconImage}`} />
            <div className={styles.iconText}>
              <h2>SCOP</h2>
              <p>Facilitarea dezvoltării personale și sociale a tinerilor, și îndrumarea spre realizezarea potențialului, obținerea cunoștințelor, abilităților și aptitudinilor necesare pentru integrarea lor reușită în societate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default About;
