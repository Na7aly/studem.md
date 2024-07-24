import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';  // import your logo image

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? styles.mainContainer : ""} onClick={() => Close()} />
      <nav className={styles.navbar} onClick={(e) => e.stopPropagation()}>
        <div className={styles.navContainer}>
          <ScrollLink to="home" smooth={true} duration={500} className={styles.logo}>
            <img src={logo} alt="STUDEM Logo" />
          </ScrollLink>
          <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
            <li className={styles.navItem}>
              <ScrollLink to="home" smooth={true} duration={500} className={styles.navLinks} onClick={click ? handleClick : null}>Acasă</ScrollLink>
            </li>
            <li className={styles.navItem}>
              <ScrollLink to="domains" smooth={true} duration={500} className={styles.navLinks} onClick={click ? handleClick : null}>Domenii</ScrollLink>
            </li>
            <li className={styles.navItem}>
              <ScrollLink to="space" smooth={true} duration={500} className={styles.navLinks} onClick={click ? handleClick : null}>Spațiu</ScrollLink>
            </li>
            <li className={styles.navItem}>
              <ScrollLink to="news" smooth={true} duration={500} className={styles.navLinks} onClick={click ? handleClick : null}>Noutăți</ScrollLink>
            </li>
            <li className={styles.navItem}>
              <ScrollLink to="team" smooth={true} duration={500} className={styles.navLinks} onClick={click ? handleClick : null}>Echipa</ScrollLink>
            </li>
            <li className={styles.navItem}>
              <ScrollLink to="finantatori" smooth={true} duration={500} className={styles.navLinks} onClick={click ? handleClick : null}>Finanțatori</ScrollLink>
            </li>
            <li className={styles.navItem}>
              <ScrollLink to="parteneri" smooth={true} duration={500} className={styles.navLinks} onClick={click ? handleClick : null}>Parteneri</ScrollLink>
            </li>
            <li className={styles.navItem}>
              <ScrollLink to="transparenta" smooth={true} duration={500} className={styles.navLinks} onClick={click ? handleClick : null}>Transparență</ScrollLink>
            </li>
            <li className={styles.navItem}>
              <ScrollLink to="contact" smooth={true} duration={500} className={styles.navLinks} onClick={click ? handleClick : null}>Contacte</ScrollLink>
            </li>
          </ul>
          <div className={styles.navIcon} onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
