import React from 'react';
import Slider from 'react-slick';
import styles from './Testimonial.module.css'; // Importăm module CSS
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import vladImg from '../../img/vlad.png'; // Imagini importate
import mariusImg from '../../img/vlad.png';
import danielImg from '../../img/vlad.png';
import maximImg from '../../img/vlad.png';
import alinaImg from '../../img/vlad.png';

const reviewData = [
  {
    text: "Schimbarea se află în noi, cei care vor să modeleze viitorul acționând în prezent, anume din aceste considerente eu am luptat de a fi în STUDEM și în al treilea mandat. Călătoria mea ca Voluntar al Centrului de Tineret a luat sfârșit, prin realizarea a ceva mai bun pentru Sectorul de Tineret din municipiul Bălți, iar acum ofer șansa și altor Tineri de a schimba viitorul prin acțiunile din prezent.",
    name: "Vlad Goncear",
    role: "Membru al boardului 2020, 2021, 2022",
    imgSrc: vladImg
  },
  {
    text: "Nu e chiar atât de greu să faci primul pas!",
    name: "Marius Toderică",
    role: "Membru al boardului 2022, 2023",
    imgSrc: mariusImg
  },
  {
    text: "STUDEM e ca o gură de aer proaspăt, înveți să trăiești viața din nou!",
    name: "Daniel Bulgaru",
    role: "Membru al boardului 2022",
    imgSrc: danielImg
  },
  {
    text: "STUDEM a fost un loc în care am descoperit nu doar cunoștințe noi, ci și o comunitate plină de energie și entuziasm. Datorită Centrului, am câștigat încredere în propria mea capacitate de a învăța și de a crește profesional și personal.",
    name: "Maxim Călărași",
    role: "Membru al boardului 2020",
    imgSrc: maximImg
  },
  {
    text: "E imposibil să redau în doua promoții toate cunoștințele, emoțiile și experiențele ce le-am acumulat în doi ani și jumătate fiind membră a familie STUDEM. STUDEM a fost startul meu în viață, m-a făcut să-mi găsesc punctele tari a caracterului și mi-a perfectat neajunsurile. Formarea mea ca personalitate a avut loc aici, la STUDEM. Mereu în inimă și în gând. Spun succes celor ce se alătură familiei. ❤️",
    name: "Alina Bogaci",
    role: "Membră a boardului 2020, 2021",
    imgSrc: alinaImg
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className={styles.reviews} id="reviews">
      <h1 className={styles.heading}>Ce spune Familia STUDEM</h1>
      <Slider {...settings}>
        {reviewData.map((review, index) => (
          <div className={styles.slide} key={index}>
            <p className={styles.text}>{review.text}</p>
            <div className={styles.user}>
              <img src={review.imgSrc} alt={review.name} />
              <div className={styles.info}>
                <h3>{review.name}</h3>
                <span>{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
