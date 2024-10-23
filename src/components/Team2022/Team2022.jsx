import React from 'react';
import styles from './Team2022.module.css';

const teamMembers = [
  { name: 'Băbuță Luminița', title: 'Responsabilă de Social Media', image: require('../../img/luminita2022.jpg') },
  { name: 'Goncear Vlad', title: 'Trezorier', image: require('../../img/vlad.2022.jpg') },
  { name: 'Sanduleac Loredana', title: 'PR Manager', image: require('../../img/lorica2022.jpg') },
  { name: 'Ciomschi Ioan-Giuliano', title: 'Responsabil de Spațiu', image: require('../../img/jul2022.jpg') },
  { name: 'Chetrari Darius', title: 'Responsabil de Clubul Media', image: require('../../img/darius2022.jpg') },
  { name: 'Gliga Nadejda', title: 'Traducător', image: require('../../img/nadea2022.jpg') },
  { name: 'Postolachi Gabriela', title: 'Responsabil de Școala Tânărului Politic', image: require('../../img/gabi2022.jpg') },
  { name: 'Bulgaru Daniel', title: 'Responsabil de Programul de Granturi pentru Tineri', image: require('../../img/danu2022.jpg') },
  { name: 'Lîsenco Valeria', title: 'Responsabil de Consiliile de Elevi partenere', image: require('../../img/lera.2022.jpg') },
  { name: 'Toderică Marius', title: 'Secretar', image: require('../../img/marius2022.jpg') },
  { name: 'Țurcanu Mihaela', title: 'Responsabilă de Programul de Granturi pentru Consiliile de Elevi', image: require('../../img/mihaela2022.jpg') },
  { name: 'Certan Nichita', title: 'Membru cu drepturi speciale', image: require('../../img/nikita2022.jpg') },
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
