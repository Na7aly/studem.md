import React from 'react';
import styles from './Team.module.css';

import avatar from '../img/studem.jpg';

const Team = () => {
  const teamMembers = [
    { name: 'Constantin Curca', position: 'Director Executiv AO "STUDEM" din Bălți' },
    { name: 'Frederikke Thorning', position: 'Coordonator de Proiect din partea Danemarcei' },
    { name: 'Ioan-Giuliano Ciomschi', position: 'Coordonator de voluntari STUDEM' },
    { name: 'Peter Kolby', position: 'Comunicare și PR Manager' },
    { name: 'Aleftina Grebanosu', position: 'Responsabilă de Incluziune' },
    { name: 'Michelle Luo', position: 'Comunicare și PR Manager' },
    { name: 'Ion Ionaș', position: 'Responsabil de Buget' },
  ];

  return (
    <div className={styles.team}>
      <h2>ECHIPA</h2>
      <p>Coordonatorii STUDEM</p>
      <div className={styles.teamMembers}>
        {teamMembers.map((member, index) => (
          <div className={styles.teamMember} key={index}>
            <img src={avatar} alt={`Team Member ${index + 1}`} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
