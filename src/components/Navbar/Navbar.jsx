import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { Link as ScrollLink, scroller } from 'react-scroll';
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';  

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const Close = () => {
    setClick(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSectionClick = (section, external = false) => {
    Close();  // Închide dropdown-ul și meniul la click

    if (external) {
      setScrollTarget(null);
      navigate(`/${section}`);
      window.scrollTo(0, 0);  // Scroll to top
    } else if (location.pathname === '/') {
      scroller.scrollTo(section, { smooth: true, duration: 500, offset: -100 });
    } else {
      setScrollTarget(section);
      navigate('/');
    }
  };

  const handleLogoClick = () => {
    handleSectionClick('ArticlesList');
  };

  useEffect(() => {
    if (scrollTarget && location.pathname === '/') {
      const timeoutId = setTimeout(() => {
        scroller.scrollTo(scrollTarget, { smooth: true, duration: 500, offset: -100 });
        setScrollTarget(null);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [location, scrollTarget]);

  return (
    <div>
      <div className={click ? styles.mainContainer : ""} onClick={() => Close()} />
      <nav className={styles.navbar} onClick={(e) => e.stopPropagation()}>
        <div className={styles.navContainer}>
          <ScrollLink to="HomePagee" smooth={true} duration={500} className={styles.logo} onClick={handleLogoClick}>
            <img src={logo} alt="STUDEM Logo" />
          </ScrollLink>
          <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
            <li className={styles.navItem}>
              <span className={styles.navLinks} onClick={() => handleSectionClick('HomePagee')}>Noutăți</span>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLinks} onClick={() => handleSectionClick('domains')}>Domenii</span>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLinks} onClick={() => handleSectionClick('space')}>Spațiu</span>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLinks} onClick={toggleDropdown}>
                Mai Mult <i className="fa fa-caret-down"></i>
              </span>
              {dropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <span className={styles.dropdownLink} onClick={() => handleSectionClick('team')}>Echipa</span>
                  </li>
                  <li>
                    <Link to="/granturi" className={styles.dropdownLink} onClick={() => handleSectionClick('granturi', true)}>Granturi</Link>
                  </li>
                  <li>
                    <span className={styles.dropdownLink} onClick={() => handleSectionClick('finantatori')}>Finanțatori</span>
                  </li>
                  <li>
                    <Link to="/parteneri" className={styles.dropdownLink} onClick={() => handleSectionClick('parteneri', true)}>Parteneri</Link>
                  </li>
                  <li>
                    <Link to="/transparenta" className={styles.dropdownLink} onClick={() => handleSectionClick('transparenta', true)}>Transparență</Link>
                  </li>
                  <li>
  <Link to="/board" className={styles.dropdownLink} onClick={() => handleSectionClick('board', true)}>Membrii Boardului</Link>
</li>


                </ul>
              )}
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLinks} onClick={() => handleSectionClick('contact', true)}>Contacte</Link>
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
