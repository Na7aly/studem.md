import React, { useState } from 'react';
import styles from './Testimonial.module.css';
import gsap from 'gsap';
import vlad from '../../img/vlad.png';
// Importă celelalte imagini similare
import marius from '../../img/vlad.png'; // Înlocuiește cu calea reală
import daniel from '../../img/vlad.png'; // Înlocuiește cu calea reală
import maxim from '../../img/vlad.png'; // Înlocuiește cu calea reală
import alina from '../../img/vlad.png'; // Înlocuiește cu calea reală

// Array de recenzii pentru membrii STUDEM
const people = [
  {
    photo: vlad,
    name: "Vlad Goncear",
    profession: "MEMBRU BOARD",
    description: "Schimbarea se află în noi, cei care vor să modeleze viitorul acționând în prezent, anume din aceste considerente eu am luptat de a fi în STUDEM și în al treilea mandat. Călătoria mea ca Voluntar al Centrului de Tineret a luat sfârșit, prin realizarea a ceva mai bun pentru Sectorul de Tineret din municipiul Bălți, iar acum ofer șansa și altor Tineri de a schimba viitorul prin acțiunile din prezent."
  },
  {
    photo: marius,
    name: "Marius Toderică",
    profession: "MEMBRU BOARD",
    description: "Nu e chiar atât de greu să faci primul pas!"
  },
  {
    photo: daniel,
    name: "Daniel Bulgaru",
    profession: "MEMBRU BOARD",
    description: "STUDEM e ca o gură de aer proaspăt, înveți să trăiești viața din nou!"
  },
  {
    photo: maxim,
    name: "Maxim Călărași",
    profession: "MEMBRU BOARD",
    description: "STUDEM a fost un loc în care am descoperit nu doar cunoștințe noi, ci și o comunitate plină de energie și entuziasm. Datorită Centrului, am câștigat încredere în propria mea capacitate de a învăța și de a crește profesional și personal."
  },
  {
    photo: alina,
    name: "Alina Bogaci",
    profession: "MEMBRU BOARD",
    description: "E imposibil să redau în doua promoții toate cunoștințele, emoțiile și experiențele ce le-am acumulat în doi ani și jumătate fiind membră a familie STUDEM. STUDEM a fost startul meu în viață, m-a făcut să-mi găsesc punctele tari a caracterului și mi-a perfectat neajunsurile. Formarea mea ca personalitate a avut loc aici, la STUDEM. Mereu în inimă și în gând. Spun succes celor ce se alătură familiei. ❤️"
  }
];

const App = () => {
  const [currentPerson, setCurrentPerson] = useState(0);

  // Functia pentru schimbarea recenziei
  const slide = (whichSide) => {
    let sideSymbol = whichSide === 'left' ? '' : '-';
    let sideSymbolOpp = whichSide === 'left' ? '-' : '';

    gsap.timeline()
      .to(`.${styles.reviewWrap}`, {
        duration: 0.4,
        opacity: 0,
        x: `${sideSymbol}${window.innerWidth}px`
      })
      .to(`.${styles.reviewWrap}`, {
        duration: 0,
        x: `${sideSymbolOpp}${window.innerWidth}px`
      })
      .call(() => {
        setCurrentPerson(prevPerson => (prevPerson + (whichSide === 'left' ? 1 : -1) + people.length) % people.length);
      })
      .to(`.${styles.reviewWrap}`, {
        duration: 0.4,
        opacity: 1,
        x: 0
      });
  };

  return (
    <div className={styles.contentWrapper}>
      <h1>Ce spune Familia STUDEM</h1>
      <div className={styles.blueLine}></div>
      <div className={styles.wrapperForArrows}>
        <div className={styles.reviewWrap}>
          <div
            className={styles.imgDiv}
            style={{ backgroundImage: `url(${people[currentPerson].photo})` }}
          ></div>
          <div className={styles.personName}>{people[currentPerson].name}</div>
          <div className={styles.profession}>{people[currentPerson].profession}</div>
          <div className={styles.description}>{people[currentPerson].description}</div>
        </div>
        <div className={`${styles.arrowWrap} ${styles.leftArrowWrap}`} onClick={() => slide('left')}>
          <div className={styles.arrow}></div>
        </div>
        <div className={`${styles.arrowWrap} ${styles.rightArrowWrap}`} onClick={() => slide('right')}>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
