import React from 'react';
import styles from './Team2021.module.css';

const teamMembers = [
  { name: 'Băbuță Luminița', title: 'Responsabilă de Social Media', image: require('../../img/Team2021/luminita.jpg') },
  { name: 'Cojuharu Evelina', title: 'Trezorier', image: require('../../img/Team2021/evelina.jpg') },
  { name: 'Gliga Nadejda', title: 'Responsabil de Spațiu', image: require('../../img/Team2021/nadea.jpg') },
  { name: 'Ciomschi Ioan-Giuliano', title: 'Traducător', image: require('../../img/Team2021/giuliano.jpg') },
  { name: 'Nicolaev Andrian', title: 'Responsabil de Școala Tânărului Politic', image: require('../../img/Team2021/andrian.jpg') },
  { name: 'Bogaci Alina', title: 'Responsabilă de Programul de Granturi pentru Tineri', image: require('../../img/Team2021/alina.jpg') },
  { name: 'Botnari Igor', title: 'Responsabil de Consiliile de Elevi partenere', image: require('../../img/Team2021/igor.jpg') },
  { name: 'Scripnic Mihaela', title: 'Secretară', image: require('../../img/team2020/mihaela.jpg') },
  { name: 'Tacu Elena-Madina', title: 'Responsabilă de Programul de Granturi pentru Consiliile de Elevi', image: require('../../img/Team2021/madina .jpg') },
];

const Team2021 = () => {
    return (
      <div className={styles.teamContainer}>
        <h1 className={styles.sectionHeading}>Membrii Boardului 2021</h1>
        <div className={styles.membersGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <img src={member.image} alt={member.name} className={styles.memberImage} />
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberTitle}>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team2021;