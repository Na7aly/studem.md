import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll'; // Import corect pentru scroller
import styles from './SectionLinks.module.css';

const SectionLinks = () => {
    const [click, setClick] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleSectionClick = (section, external = false) => {
        setClick(false);  // Închide meniul la click

        if (external) {
            navigate(`/${section}`);
            window.scrollTo(0, 0);  // Scroll to top
        } else if (location.pathname === '/') {
            scroller.scrollTo(section, { smooth: true, duration: 500, offset: -100 });
        } else {
            navigate('/');
            setTimeout(() => {
                scroller.scrollTo(section, { smooth: true, duration: 500, offset: -100 });
            }, 100);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h3>LINK-URI UTILE</h3>
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
                                <span className={styles.navLinks} onClick={() => handleSectionClick('team')}>Echipa</span>
                            </li>
                            <li className={styles.navItem}>
                                <Link to="/granturi" className={styles.navLinks} onClick={() => handleSectionClick('granturi', true)}>Granturi</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link to="/contact" className={styles.navLinks} onClick={() => handleSectionClick('contact', true)}>Contacte</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>CONTACTE</h3>
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
                    </div>

                    <div className={styles.column}>
                        <div>
                            <h3>DESPRE NOI</h3>
                            <p>Centrul de Tineret STUDEM este o structură de auto guvernanță a tinerilor din municipiul Bălți înființată în cadrul unui parteneriat Moldo-Danez de lungă durată. Scopul de bază al Centrului este consolidarea democrației în Republica Moldova prin deprinderea cu principiile democratice în rândul tinerilor.</p>
                            <h3>URMĂREȘTE-NE</h3>
                            <ul className={styles.socialIcons}>
                                <li>
                                    <a href="https://www.facebook.com/studemproject" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/studem_md?igsh=MWxsZXVhZTBpZWt3ZQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/studem-step-up-for-democracy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linktr.ee/studem" target="_blank" rel="noopener noreferrer" aria-label="Linktree">
                                        <svg  className={styles.socialsvg} xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 417 512.238">
                                            <path fill="#473b3bc7" fillRule="nonzero" d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SectionLinks;
