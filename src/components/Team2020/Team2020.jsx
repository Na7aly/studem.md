import React from 'react';
import styles from './Team2020.module.css';

const teamMembers = [
  { name: 'Tacu Elena Madina', title: 'Responsabilă de Social Media', image: require('../../img/team2020/madina.jpg') },
  { name: 'Călărași Maxim', title: 'Trezorier', image: require('../../img/team2020/max.jpg') },
  { name: 'Talpă Cristian', title: 'PR Manager', image: require('../../img/team2020/cristi.jpg') },
  { name: 'Ciomschi Ioan-Giuliano', title: 'Responsabil de Spațiu', image: require('../../img/team2020/giulio.jpg') },
  { name: 'Băbuță Luminița', title: 'Responsabilă de Clubul de Dezbateri', image: require('../../img/team2020/luminita.jpg') },
  { name: 'Scalețchi Marina', title: 'Traducător', image: require('../../img/team2020/marina.jpg') },
  { name: 'Goncear Vlad', title: 'Responsabil de Școala Tânărului Politic', image: require('../../img/team2020/vlad.jpg') },
  { name: 'Bogaci Alina', title: 'Responsabilă de Programul de Granturi pentru Tineri', image: require('../../img/team2020/alina.jpg') },
  { name: 'Botnari Igor', title: 'Responsabil de Consiliile de Elevi partenere', image: require('../../img/team2020/igor.jpg') },
  { name: 'Scripnic Mihaela', title: 'Secretară', image: require('../../img/team2020/mihaela.jpg') },
  { name: 'Agachi Gabriela', title: 'Responsabilă de Programul de Granturi pentru Consiliile de Elevi', image: require('../../img/team2020/gabi.jpg') },
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
