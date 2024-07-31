import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Testimonial.module.css';

// Local images
import vladGoncearImg from '../../img/vlad.png';
// import mariusTodericaImg from './images/marius-toderica.jpg';
// import danielBulgaruImg from './images/daniel-bulgaru.jpg';
// import maximCalarasiImg from './images/maxim-calarasi.jpg';
// import alinaBogaciImg from './images/alina-bogaci.jpg';

// Testimonials data
const testimonials = [
  {
    name: 'Vlad Goncear',
    role: 'Board Member 2020, 2021, 2022',
    desc: '“Schimbarea se află în noi, cei care vor să modeleze viitorul acționând în prezent, anume din aceste considerente eu am luptat de a fi în STUDEM și în al treilea mandat. Călătoria mea ca Voluntar al Centrului de Tineret a luat sfârșit, prin realizarea a ceva mai bun pentru Sectorul de Tineret din municipiul Bălți, iar acum ofer șansa și altor Tineri de a schimba viitorul prin acțiunile din prezent.”',
    img: vladGoncearImg
  },
  {
    name: 'Marius Toderică',
    role: 'Board Member 2022, 2023',
    desc: '“Nu e chiar atât de greu să faci primul pas!”',
    img: vladGoncearImg
  },
  {
    name: 'Daniel Bulgaru',
    role: 'Board Member 2022',
    desc: '“STUDEM e ca o gură de aer proaspăt, înveți să trăiești viața din nou!”',
    img: vladGoncearImg
  },
  {
    name: 'Maxim Călărași',
    role: 'Board Member 2020',
    desc: '“STUDEM a fost un loc în care am descoperit nu doar cunoștințe noi, ci și o comunitate plină de energie și entuziasm. Datorită Centrului, am câștigat încredere în propria mea capacitate de a învăța și de a crește profesional și personal.”',
    img: vladGoncearImg
  },
  {
    name: 'Alina Bogaci',
    role: 'Board Member 2020, 2021',
    desc: '“E imposibil să redau în doua promoții toate cunoștințele, emoțiile și experiențele ce le-am acumulat în doi ani și jumătate fiind membră a familie STUDEM. STUDEM a fost startul meu în viață, m-a făcut să-mi găsesc punctele tari a caracterului și mi-a perfectat neajunsurile. Formarea mea ca personalitate a avut loc aici, la STUDEM. Mereu în inimă și în gând. Spun succes celor ce se alătură familiei. ❤️”',
    img: vladGoncearImg
  }
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.title}>Ce spune Familia STUDEM</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.testimonial} key={index}>
            <div className={styles.headTestimonial}>
              <img src={testimonial.img} alt={testimonial.name} className={styles.img}/>
            </div>
            <div className={styles.bodyTestimonial}>
              <div className={styles.nameTestimonial}>{testimonial.name}</div>
              <div className={styles.roleTestimonial}>{testimonial.role}</div>
              <div className={styles.descTestimonial}>{testimonial.desc}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
