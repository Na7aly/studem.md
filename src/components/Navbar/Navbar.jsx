import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>STUDEM</div>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li><ScrollLink to="home" smooth={true} duration={500}>Acasă</ScrollLink></li>
          <li><ScrollLink to="domains" smooth={true} duration={500}>Domenii</ScrollLink></li>
          <li><ScrollLink to="space" smooth={true} duration={500}>Spațiu</ScrollLink></li>
          <li><ScrollLink to="news" smooth={true} duration={500}>Noutăți</ScrollLink></li>
          <li><ScrollLink to="team" smooth={true} duration={500}>Echipa</ScrollLink></li>
          <li><ScrollLink to="finantatori" smooth={true} duration={500}>Finanțatori</ScrollLink></li>
          <li><ScrollLink to="parteneri" smooth={true} duration={500}>Parteneri</ScrollLink></li>
          <li><ScrollLink to="transparenta" smooth={true} duration={500}>Transparență</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500}>Contacte</ScrollLink></li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
