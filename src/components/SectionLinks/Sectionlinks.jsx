import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './SectionLinks.module.css';

const SectionLinks = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>LINK-URI UTILE</h3>
            <ul className={styles.list}>
              <li><ScrollLink to="home" smooth={true} duration={500}>Acasa</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} duration={500}>Despre noi</ScrollLink></li>
              <li><ScrollLink to="domains" smooth={true} duration={500}>Domenii</ScrollLink></li>
              <li><ScrollLink to="team" smooth={true} duration={500}>Echipa</ScrollLink></li>
              <li><ScrollLink to="testimonial" smooth={true} duration={500}>Citate STUDEM</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
              <li><ScrollLink to="news" smooth={true} duration={500}>News</ScrollLink></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>CONTACTE</h3>
            <ul className={styles.list}>
              <li>Strada Alexandr Puskin 19, etajul 3</li>
              <li>Moldova</li>
              <li>Bălți</li>
              <li>Telefon: +373 (60) 229996 - Constantin Curca</li>
              <li>Telefon: +373 (79) 971786 - Ioan-Giuliano Ciomschi</li>
              <li>Email: youth.center@studem.md</li>
              <li>Email: studem.balti@gmail.com</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Despre noi</h3>
            <p>Centrul de Tineret STUDEM este o structură de auto guvernanță a tinerilor din municipiul Bălți înființată în cadrul unui parteneriat Moldo-Danez de lungă durată. Scopul de bază al Centrului este consolidarea democrației în Republica Moldova prin deprinderea cu principiile democratice în rândul tinerilor</p>
            <ul className={styles.socialIcons}>
              <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SectionLinks;
