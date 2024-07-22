import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: 'Clubul Media',
      description: 'Aceasta este un Club Pilon al Centrului care vine cu oportunitatea pentru tineri de a dezvolta abilități media. Educația media este foarte importantă în societatea noastră având în vedere procesul rapid de tehnologizare prin care trecem.'
    },
    {
      title: 'Școala Tânărului Politic',
      description: 'Aceasta este un Club Pilon al Centrului, aici tinereii au posibilitatea de a se întâlni cu mai mulți actori din domeniul politic, dar și nu numai.'
    },
    {
      title: 'Spațiu gratuit pentru orice inițiativă de tineret',
      description: 'Pentru a beneficia de spațiu tinerii trebuie să completeze formularul de aplicare, dar mai întâi vă recomandăm să citiți cu atenție termenii și condițiile de oferirea a spațiului.'
    },
    {
      title: 'Programe de suport pentru Consiliile de Elevi partenere',
      description: 'Instruire și capacitarea Consiliilor de Elevi partenere, suport logistic, material și financiar prin Programul de Granturi.'
    },
    {
      title: 'Educație electorală',
      description: 'Anual boardul Centrului format din 13 tineri este ales de către tinerii din municipiu în cadrul Adunării Generale a Membrilor. De asemenea anual au loc alegeri în cadrul instituțiilor de învățământ partenere, unde sunt aleși Președinții Consiliilor de Elevi.'
    },
    {
      title: 'Peer-to-peer',
      description: 'De la tânăr la tânăr, aceste este unul dintre principiile centrului, ceea ce presupune ca toate activitățile organizate de STUDEM sunt realizate de către tineri pentru tineri.'
    },
    {
        title: 'Promovarea valorilor și principiilor democrației',
        description: 'o	Fiind un centru ce se bazează pe principiul democrației, promovăm acesta oriunde avem ocazia, nu doar acasă în cadrul STUDEM'
      },
      {
        title: 'Animarea timpului liber',
        description: 'În cadrul STUDEM sunt o mulțime de cluburi de interes cum ar fi: clubul de socializare, clubul analitic, clubul de engleză, clubul de chitară, jam seasion, cohesion/mental health, dar și multe altele la cere te poți alătura și tu.'
      },
      {
        title: 'Programul de Granturi Mici',
        description: 'o	STDUEM oferă anual finanțare pentru inițiativele de tineret. Pentru a beneficia de grant urmăriți paginile de socializare a STUDEM pentru a fi la curent cu toate detaliile și pentru a afla când este lansat programul.'
      }
  ];

  return (
    <div className={styles.services}>
      <h2 className={styles.title}>DOMENIILE DE ACTIVITATE</h2>
      <ul className={styles.list}>
        {services.map((service, index) => (
          <li key={index} className={styles.item}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;