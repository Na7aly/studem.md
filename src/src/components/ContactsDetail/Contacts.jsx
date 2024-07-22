import React from 'react';
import styles from './Contacts.module.css'; // Importă stilurile module

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <i className="fas fa-map-marker-alt"></i>
          <span>ADRESA</span>
          <p>Strada Alexandr Puskin 19, etajul 3, Bălți, Moldova</p>
        </div>
        <div className={styles.infoItem}>
          <i className="fas fa-phone"></i>
          <span>TELEFON</span>
          <p>+373 (60) 229996 - Constantin Curca</p>
          <p>+373 (79) 971786 - Ioan-Giuliano Ciomschi</p>
        </div>
        <div className={styles.infoItem}>
          <i className="fas fa-envelope"></i>
          <span>EMAIL</span>
          <p>youth.center@studem.md</p>
          <p>studem.balti@gmail.com</p>
        </div>
        <div className={styles.infoItem}>
          <i className="fas fa-clock"></i>
          <span>ORELE DE LUCRU</span>
          <p>Luni - Duminică: 10.00-22.00</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
