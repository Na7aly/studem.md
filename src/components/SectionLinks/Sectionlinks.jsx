import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './SectionLinks.module.css';

const SectionLinks = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
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
            <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <i className={`${styles.icon} fas fa-map-marker-alt`}></i>
              <span>ADRESA</span>
              <p>Strada Alexandr Puskin 19, etajul 3, Bălți, Moldova</p>
            </div>
            <div className={styles.infoItem}>
              <i className={`${styles.icon} fas fa-phone`}></i>
              <span>TELEFON</span>
              <div>
                <p>+373 (60) 229996 - Constantin Curca</p>
                <p>+373 (79) 971786 - Ioan-Giuliano Ciomschi</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <i className={`${styles.icon} fas fa-envelope`}></i>
              <span>EMAIL</span>
              <div>
                <p>youth.center@studem.md</p>
                <p>studem.balti@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <i className={`${styles.icon} fas fa-clock`}></i>
              <span>ORELE DE LUCRU</span>
              <p>Luni - Duminică: 10.00-22.00</p>
            </div>
          </div>
        </div>
            </address>
          </div>
          <div className={styles.column}>
            <div><h3>Despre noi</h3>
            <p>Centrul de Tineret STUDEM este o structură de auto guvernanță a tinerilor din municipiul Bălți înființată în cadrul unui parteneriat Moldo-Danez de lungă durată. Scopul de bază al Centrului este consolidarea democrației în Republica Moldova prin deprinderea cu principiile democratice în rândul tinerilor.</p>
            <h3>Urmărește-ne</h3>
            <ul className={styles.socialIcons}>
              <li><a href="https://www.facebook.com/studemproject" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.instagram.com/studem_md?igsh=MWxsZXVhZTBpZWt3ZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/company/studem-step-up-for-democracy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
            </ul></div>
            
            <div className={styles.newsletterContainer}>
      <div className={styles.textSection}>
        <h3>Abonează-te pentru a fi la curent cu activitățile noastre</h3>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SectionLinks;
