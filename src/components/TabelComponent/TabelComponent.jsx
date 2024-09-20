import React from 'react';
import styles from './TabelComponent.module.css'; 

const data = [
  { name: 'Natalia Botnari', functie: 'Coordonator de Consiliu', email: 'natalia.botnari@mail.com', institutie: 'Liceul Teoretic “Lucian Blaga”' },
  { name: 'Angela Bordeniuc', functie: 'Director de Educație', email: 'angela.bordeniuc@mail.com', institutie: 'Liceul Teoretic “Lucian Blaga”' },
  { name: 'Inga Savca', functie: 'Coordonator de Consiliu/ Director de Educație', email: 'inga.savca@mail.com', institutie: 'Colegiul de Industrie Ușoară' },
  { name: 'Angela Scorenco', functie: 'Director de Educație', email: 'angela.scorenco@mail.com', institutie: 'Colegiul de Muzică și Pedagogie' },
  { name: 'Antonina Prodan', functie: 'Coordonator de Consiliu', email: 'antonina.prodan@mail.com', institutie: 'Colegiul de Muzică și Pedagogie' },
  { name: 'Irina Malinețchi', functie: 'Coordonator de Consiliu', email: 'irina.malinetchi@mail.com', institutie: 'Liceul Teoretic "George Coșbuc"' },
  { name: 'Emil Calistru', functie: 'Director de Educație', email: 'emil.calistru@mail.com', institutie: 'Liceul Teoretic "George Coșbuc"' },
  { name: 'Ludmila Gherasim', functie: 'Coordonator de Consiliu/ Director de Educație', email: 'ludmila.gherasim@mail.com', institutie: 'Colegiul de Medicină' },
  { name: 'Ursu Natalia', functie: 'Coordonator de Consiliu', email: 'natalia.ursu@mail.com', institutie: 'Liceul Teoretic "Vasile Alecsandri"' },
  { name: 'Blându Galina', functie: 'Director de Educație', email: 'galina.blandu@mail.com', institutie: 'Liceul Teoretic "Vasile Alecsandri"' },
  { name: 'Rabei-Dubeț Daniela', functie: 'Coordonator de Consiliu/ Director de Educație', email: 'daniela.rabei@mail.com', institutie: 'I.P. Liceul Teoretic "Mihai Eminescu"' },
  { name: 'Moraru Victor', functie: 'Coordonator de Consiliu/ Director de Educație', email: 'victor.moraru@mail.com', institutie: 'I.P. Liceul Teoretic Republican "Ion Creangă"' },
  { name: 'Safca Ana', functie: 'Coordonator de Consiliu', email: 'ana.safca@mail.com', institutie: 'Liceul Teoretic "B. P. Hasdeu"' },
  { name: 'Cârstea Angela', functie: 'Director de Educație', email: 'angela.carstea@mail.com', institutie: 'Liceul Teoretic "B. P. Hasdeu"' },
  { name: 'Vovc Eduard', functie: 'Director de Educație', email: 'eduard.vovc@mail.com', institutie: 'Școala Profesională Nr. 5' },
  { name: 'Dana Vasiliev', functie: 'Coordonator de Consiliu', email: 'dana.vasiliev@mail.com', institutie: 'Școala Profesională Nr. 5' },
  { name: 'Garbuz Vasile', functie: 'Coordonator de Consiliu', email: 'vasile.garbuz@mail.com', institutie: 'Colegiul Pedagogic "Ion Creangă"' },
  { name: 'Răciulă Ludmila', functie: 'Director de Educație', email: 'ludmila.raciula@mail.com', institutie: 'Colegiul Pedagogic "Ion Creangă"' },
  { name: 'Hârjău Maria', functie: 'Director de Educație', email: 'maria.harjau@mail.com', institutie: 'Colegiul Tehnic Feroviar din Bălți' },
  { name: 'Comerzan Mariana', functie: 'Coordonator de Consiliu', email: 'mariana.comerzan@mail.com', institutie: 'Colegiul Tehnic Feroviar din Bălți' },
  { name: 'Светлана Осербаева', functie: 'Director de Educație', email: 'svetlana.oserbaeva@mail.com', institutie: 'Liceul Teoretic "Ștefan cel Mare"' },
  { name: 'Валентина Николаевна Гуцу', functie: 'Coordonator de Consiliu', email: 'valentina.gutsu@mail.com', institutie: 'Liceul Teoretic "Ștefan cel Mare"' },
  { name: 'Ludmila Mihai Gherman', functie: 'Coordonator de Consiliu', email: 'ludmila.gherman@mail.com', institutie: 'Liceul Teoretic "Mihail Lomonosov"' },
  { name: 'Рита Ивановна', functie: 'Director instituției', email: 'rita.ivanovna@mail.com', institutie: 'Liceul Teoretic "Vladimir Maiakovski"' },
  { name: 'Елена Викторовна', functie: 'Coordonator de Consiliu', email: 'elena.viktorovna@mail.com', institutie: 'Liceul Teoretic "Vladimir Maiakovski"' },
  { name: 'Анжелa Григорьевнa', functie: 'Director de Educație', email: 'anzhela.grigorievna@mail.com', institutie: 'Liceul Teoretic "Dimitri Cantemir"' },
  { name: 'Тетелюк Сергей', functie: 'Coordonator de Consiliu', email: 'sergey.tetelyuk@mail.com', institutie: 'Liceul Teoretic "Dimitri Cantemir"' },
  { name: 'Людмила Ивановна', functie: 'Director de Educație', email: 'ludmila.ivanovna@mail.com', institutie: 'I.P. Liceul Teoretic "Nikolai Gogol"' },
  { name: 'Вита Анатольевна', functie: 'Coordonator de Consiliu', email: 'vita.anatolevna@mail.com', institutie: 'I.P. Liceul Teoretic "Nikolai Gogol"' },
  { name: 'Гыску Анастасия', functie: 'Coordonator de Consiliu', email: 'anastasia.gysku@mail.com', institutie: 'Liceul Teoretic "Aleksandr Pușkin"' },
  { name: 'Гажим Лидия', functie: 'Director de Educație', email: 'lidia.gazhim@mail.com', institutie: 'Liceul Teoretic "Aleksandr Pușkin"' },
  { name: 'Сырбу Кристина', functie: 'Coordonator de Consiliu/ Director de Educație', email: 'kristina.syrbu@mail.com', institutie: 'Liceul Teoretic ”Maxim Gorkii”' }
];

const TabelComponent = () => {
  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.heading}>CONSILII DE ELEVI PARTENERE</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Numele, Prenumele</th>
            <th>Funcția</th>
            <th>Email</th>
            <th>Instituția</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.functie}</td>
              <td>{person.email}</td>
              <td>{person.institutie}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelComponent;
