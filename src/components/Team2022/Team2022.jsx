import React from 'react';
import styles from './Team2022.module.css';

const teamMembers = [
  { name: 'Băbuță Luminița', title: 'Responsabilă de Social Media', image: require('../../img/team2022/luminita.jpg') },
  { name: 'Goncear Vlad', title: 'Trezorier', image: require('../../img/team2022/vlad.jpg') },
  { name: 'Sanduleac Loredana', title: 'PR Manager', image: require('../../img/team2022/lorica.jpg') },
  { name: 'Ciomschi Ioan-Giuliano', title: 'Responsabil de Spațiu', image: require('../../img/team2022/jul.jpg') },
  { name: 'Chetrari Darius', title: 'Responsabil de Clubul Media', image: require('../../img/team2022/darius.jpg') },
  { name: 'Gliga Nadejda', title: 'Traducător', image: require('../../img/team2022/nadea.jpg') },
  { name: 'Postolachi Gabriela', title: 'Responsabil de Școala Tânărului Politic', image: require('../../img/team2022/gabi.jpg') },
  { name: 'Bulgaru Daniel', title: 'Responsabil de Programul de Granturi pentru Tineri', image: require('../../img/team2022/danu.jpg') },
  { name: 'Lîsenco Valeria', title: 'Responsabil de Consiliile de Elevi partenere', image: require('../../img/team2022/lera.jpg') },
  { name: 'Toderică Marius', title: 'Secretar', image: require('../../img/team2022/marius.jpg') },
  { name: 'Țurcanu Mihaela', title: 'Responsabilă de Programul de Granturi pentru Consiliile de Elevi', image: require('../../img/team2022/mihaela.jpg') },
  { name: 'Certan Nichita', title: 'Membru cu drepturi speciale', image: require('../../img/team2022/nikita.jpg') },
];

const Team2022 = () => {
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.sectionHeading}>Membrii Boardului 2022</h1>
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

export default Team2022;
