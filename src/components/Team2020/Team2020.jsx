import React from 'react';
import styles from './Team2020.module.css';

const teamMembers = [
  { name: 'Tacu Elena Madina', title: 'Responsabilă de Social Media', image: require('../../img/madina2020.jpg') },
  { name: 'Călărași Maxim', title: 'Trezorier', image: require('../../img/max.2020.jpg') },
  { name: 'Talpă Cristian', title: 'PR Manager', image: require('../../img/cristi2020.jpg') },
  { name: 'Ciomschi Ioan-Giuliano', title: 'Responsabil de Spațiu', image: require('../../img/giulio2020.jpg') },
  { name: 'Băbuță Luminița', title: 'Responsabilă de Clubul de Dezbateri', image: require('../../img/luminita2020.jpg') },
  { name: 'Scalețchi Marina', title: 'Traducător', image: require('../../img/madina2020.jpg') },
  { name: 'Goncear Vlad', title: 'Responsabil de Școala Tânărului Politic', image: require('../../img/vlad2020.jpg') },
  { name: 'Bogaci Alina', title: 'Responsabilă de Programul de Granturi pentru Tineri', image: require('../../img/alina2020.jpg') },
  { name: 'Botnari Igor', title: 'Responsabil de Consiliile de Elevi partenere', image: require('../../img/igor2020.jpg') },
  { name: 'Scripnic Mihaela', title: 'Secretară', image: require('../../img/mihaela2020.jpg') },
  { name: 'Agachi Gabriela', title: 'Responsabilă de Programul de Granturi pentru Consiliile de Elevi', image: require('../../img/gabi2020.jpg') },
];

const Team2020 = () => {
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.sectionHeading}>Membrii Boardului 2020</h1>
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

export default Team2020;
