import React from 'react';
import styles from './Team2024.module.css';

const teamMembers = [
  { name: 'Bajereanu Elena', title: 'Responsabilă de Programul de Granturi Mici pentru Tineri', image: require('../../img/Elena Bajereanuc2024.jpeg') },
  { name: 'Chicu Daniel', title: 'Responsabil de Programul de Granturi Mici pentru Tineri', image: require('../../img/Chicu Daniel2024.jpeg') },
  { name: 'Chironda Olivia', title: 'Responsabilă de Consiliile de Elevi partenere', image: require('../../img/Chironda Oliviac2024.jpeg') },
  { name: 'Fistic Vladislav', title: 'Trezorier', image: require('../../img/Vladislav Fistic2024.jpg') },
  { name: 'Golban Marcus', title: 'Responsabil de Clubul Media', image: require('../../img/fotogenerala2024.png') },
  { name: 'Guțu Amalia', title: 'Comunicator', image: require('../../img/fotogenerala2024.png') },
  { name: 'Lihovețchi Uliana', title: 'Traducător', image: require('../../img/fotogenerala2024.png') },
  { name: 'Lungu Vladimir', title: 'Responsabil de Spațiu', image: require('../../img/Lungu Vladimir2023.jpg') },
  { name: 'Panova Anastasia', title: 'Secretară', image: require('../../img/Nastea Panovac2024.jpeg') },
  { name: 'Popa Anastasia', title: 'Responsabilă de Voluntari', image: require('../../img/fotogenerala2024.png') },
  { name: 'Romanova Carolina', title: 'Responsabilă de Clubul Media', image: require('../../img/fotogenerala2024.png') },
  { name: 'Talpă Alexandru', title: 'Responsabil de Școala Tânărului Politic', image: require('../../img/fotogenerala2024.png') },
  { name: 'Tofan Ariana', title: 'Secretară', image: require('../../img/fotogenerala2024.png') },
  { name: 'Vieru Mădălina', title: 'Coordonator Analitic', image: require('../../img/fotogenerala2024.png') },
];

const Team2024 = () => {
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.sectionHeading}>Membrii Boardului 2024</h1>
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

export default Team2024;
