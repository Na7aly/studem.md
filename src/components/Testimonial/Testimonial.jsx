import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import styles from './Testimonial.module.css';
// import costeaImage from '../../img/costea.jpg';

function Detail() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Vlad Goncear',
      role: 'membru al boardului 2020, 2021, 2022',
      quote: '”Schimbarea se află în noi, cei care vor să modeleze viitorul acționând în prezent, anume din aceste considerente eu am luptat de a fi în STUDEM și în al treilea mandat. Călătoria mea ca Voluntar al Centrului de Tineret a luat sfârșit, prin realizarea a ceva mai bun pentru Sectorul de Tineret din municipiul Bălți, iar acum ofer șansa și altor Tineri de a schimba viitorul prin acțiunile din prezent.”',
      // imageUrl: '/img/costea.jpg'// Adaugă URL-ul imaginii
    },
    {
      name: 'Marius Toderică',
      role: 'membru al boardului 2022, 2023',
      quote: '”Nu e chiar atât de greu să faci primul pas!”',
      // imageUrl: '../../img/costea.jpg' // Adaugă URL-ul imaginii
    },
    {
      name: 'Daniel Bulgaru',
      role: 'membru al boardului 2022',
      quote: '”STUDEM e ca o gură de aer proaspăt, înveți să trăiești viața din nou!”',
      // imageUrl: '../../img/costea.jpg' // Adaugă URL-ul imaginii
    },
    {
      name: 'Maxim Călărași',
      role: 'membru al boardului 2020',
      quote: '”STUDEM a fost un loc în care am descoperit nu doar cunoștințe noi, ci și o comunitate plină de energie și entuziasm. Datorită Centrului, am câștigat încredere în propria mea capacitate de a învăța și de a crește profesional și personal.”',
      // imageUrl: '../../img/costea.jpg' // Adaugă URL-ul imaginii
    },
    {
      name: 'Alina Bogaci',
      role: 'membră a boardului 2020, 2021',
      quote: '”E imposibil să redau în doua promoții toate cunoștințele, emoțiile și experiențele ce le-am acumulat în doi ani și jumătate fiind membră a familie STUDEM. STUDEM a fost startul meu în viață, m-a făcut să-mi găsesc punctele tari a caracterului și mi-a perfectat neajunsurile. Formarea mea ca personalitate a avut loc aici, la STUDEM. Mereu în inimă și în gând. Spun succes celor ce se alătură familiei. ❤️”',
      // imageUrl: '../../img/costea.jpg'// Adaugă URL-ul imaginii
    },
  ];
  

  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePagination = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.app}>
      <h1>Ce spune Familia STUDEM</h1>
      <div className={styles.testimonialList}>
        {testimonials
          .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
          .map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
      </div>
      <div className={styles.pagination}>
        {[...Array(totalPages).keys()].map((index) => (
          <span
            key={index}
            className={`${styles.paginationDot} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => handlePagination(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Detail;
