import React from 'react';
import styles from './Team2023.module.css';

const teamMembers = [
  { name: 'Tarlapan Alexandra', title: 'Comunicator', image: require('../../img/team2023/Tarlapan Alexandra.jpg') },
  { name: 'Chetrari Darius', title: 'Trezorier', image: require('../../img/team2023/Darius Chetrari.jpg') },
  { name: 'Lungu Vladimir', title: 'Responsabil de Spațiu', image: require('../../img/team2023/Lungu Vladimir.jpg') },
  { name: 'Caracaș Victoria', title: 'Traducător', image: require('../../img/team2023/Caracaș Victoria.jpg') },
  { name: 'Tofan Ariana', title: 'Responsabil de Școala Tânărului Politic', image: require('../../img/team2023/Tofan Ariana.jpg') },
  { name: 'Chirița Sandu', title: 'Responsabil de Consiliile de Elevi partenere', image: require('../../img/team2023/Chirița Sandu.jpg') },
  { name: 'Bejînari Evelina', title: 'Secretară', image: require('../../img/team2023/Bejînari Evelina.jpg') },
  { name: 'Coda Ana', title: 'Responsabilă de Programul de Granturi', image: require('../../img/team2023/Ana Coda.jpg') },
  { name: 'Toderică Marius', title: 'Coordonator Analitic', image: require('../../img/team2023/Marius Toderică.jpg') },
  { name: 'Lîsenco Valeria', title: 'Responsabilă de Clubul Media', image: require('../../img/team2023/Lera Lîsenco.jpg') },
  { name: 'Țarălungă Dorina', title: 'Coordonator de Voluntari', image: require('../../img/team2023/Țaralungă Dorina.jpg') },
  { name: 'Cotună Diana', title: 'Membru cu drepturi speciale', image: require('../../img/team2023/Cotuna Diana.jpg') },
  { name: 'Țurcanu Mihaela', title: 'Membru cu drepturi speciale', image: require('../../img/team2023/Ana Coda.jpg') },
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
