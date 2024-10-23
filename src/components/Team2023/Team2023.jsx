import React from 'react';
import styles from './Team2023.module.css';

const teamMembers = [
  { name: 'Tarlapan Alexandra', title: 'Comunicator', image: require('../../img/Tarlapan Alexandra2023.jpg') },
  { name: 'Chetrari Darius', title: 'Trezorier', image: require('../../img/Darius Chetrari2023.jpg') },
  { name: 'Lungu Vladimir', title: 'Responsabil de Spațiu', image: require('../../img/Lungu Vladimir2023.jpg') },
  { name: 'Caracaș Victoria', title: 'Traducător', image: require('../../img/Caracaș Victoria2023.jpg') },
  { name: 'Tofan Ariana', title: 'Responsabil de Școala Tânărului Politic', image: require('../../img/Tofan Ariana.2023.jpg') },
  { name: 'Chirița Sandu', title: 'Responsabil de Consiliile de Elevi partenere', image: require('../../img/Chirița Sandu2023.jpg') },
  { name: 'Bejînari Evelina', title: 'Secretară', image: require('../../img/Bejînari Evelina2023.jpg') },
  { name: 'Coda Ana', title: 'Responsabilă de Programul de Granturi', image: require('../../img/Ana Coda2023.jpg') },
  { name: 'Toderică Marius', title: 'Coordonator Analitic', image: require('../../img/Marius Toderică2023.jpg') },
  { name: 'Lîsenco Valeria', title: 'Responsabilă de Clubul Media', image: require('../../img/Lera Lîsenco2023.jpg') },
  { name: 'Țarălungă Dorina', title: 'Coordonator de Voluntari', image: require('../../img/Țaralungă Dorina2023.jpg') },
  { name: 'Cotună Diana', title: 'Membru cu drepturi speciale', image: require('../../img/Cotuna Diana2023.jpg') },
  { name: 'Țurcanu Mihaela', title: 'Membru cu drepturi speciale', image: require('../../img/mihaela2022.jpg') },
];

const Team2023 = () => {
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.sectionHeading}>Membrii Boardului 2023</h1>
      <div className={styles.membersGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <img src={member.image} alt={member.name} className={styles.memberImage} />
            <h3 className={styles.memberName}>{member.name}</h3>
            <p className={styles.memberTitle}>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team2023;
