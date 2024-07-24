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
              <li><ScrollLink to="home" smooth={true} duration={500}>Acasă</ScrollLink></li>
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
            <address>
              <ul className={styles.list}>
                <li>Strada Alexandr Pușkin 19, etajul 3</li>
                <li>Moldova</li>
                <li>Bălți</li>
                <li>Telefon: <a href="tel:+37360229996">+373 (60) 229996 - Constantin Curca</a></li>
                <li>Telefon: <a href="tel:+37379971786">+373 (79) 971786 - Ioan-Giuliano Ciomschi</a></li>
                <li>Email: <a href="mailto:youth.center@studem.md">youth.center@studem.md</a></li>
                <li>Email: <a href="mailto:studem.balti@gmail.com">studem.balti@gmail.com</a></li>
              </ul>
            </address>
          </div>
          <div className={styles.column}>
            <h3>Despre noi</h3>
            <p>Centrul de Tineret STUDEM este o structură de auto guvernanță a tinerilor din municipiul Bălți înființată în cadrul unui parteneriat Moldo-Danez de lungă durată. Scopul de bază al Centrului este consolidarea democrației în Republica Moldova prin deprinderea cu principiile democratice în rândul tinerilor.</p>
            <ul className={styles.socialIcons}>
              <li><a href="https://www.facebook.com/studemproject" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.instagram.com/studem_md?igsh=MWxsZXVhZTBpZWt3ZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/company/studem-step-up-for-democracy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SectionLinks;
