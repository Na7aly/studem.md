import React from 'react';
import styles from './Team.module.css';

import costeaAvatar from '../../img/costea.jpg';
import fredAvatar from '../../img/fred.jpg';
import peterAvatar from '../../img/peter.jpg';
import aleftinaAvatar from '../../img/aleftina.jpg';
import michelleAvatar from '../../img/michelle.jpg';
import ionAvatar from '../../img/ion.jpg';
import giuliano from '../../img/giuliano.jpg';
import vladislav from '../../img/vladislav.jpg';

const Team = () => {
  const teamMembers = [
    { name: 'Constantin Curca', position: 'Director Executiv AO "STUDEM" din Bălți', avatar: costeaAvatar },
    { name: 'Frederikke Thorning', position: 'Coordonator de Proiect din partea Danemarcei', avatar: fredAvatar },
    { name: 'Ioan-Giuliano Ciomschi', position: 'Coordonator de voluntari STUDEM', avatar: giuliano },
    { name: 'Vladislav Goncear', position: 'Manager de Oficiu', avatar: vladislav },
    { name: 'Peter Kolby', position: 'Comunicare și PR Manager', avatar: peterAvatar },
    { name: 'Aleftina Grebanosu', position: 'Responsabilă de Incluziune', avatar: aleftinaAvatar },
    { name: 'Michelle Luo', position: 'Comunicare și PR Manager', avatar: michelleAvatar },
    { name: 'Ion Ionaș', position: 'Responsabil de Buget', avatar: ionAvatar },
  ];

  return (
    <div  id="team" className={styles.team}>
      <h2 className={styles.heading}>ECHIPA</h2>
      <p className={styles.subtitle}>COORDONATORII STUDEM</p>
      <div className={styles.teamMembers}>
        {teamMembers.map((member, index) => (
          <div className={styles.teamMember} key={index}>
            <div className={styles.pic}>
              <img src={member.avatar} alt={`Team Member ${index + 1}`} className={styles.avatar} />
            </div>
            <h3 className={styles.title}>{member.name}</h3>
            <p className={styles.position}>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
