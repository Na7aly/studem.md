import React from 'react';
import styles from './Donors.module.css';

// Import all images
import img1 from '../../img/ant_.jpg';
import img2 from '../../img/duf.png';
import img3 from '../../img/fee_logo.jpg';
import img4 from '../../img/usaid_.jpg';
import img5 from '../../img/silba.png';
import img6 from '../../img/ndf.png';
import img7 from '../../img/sparkfund.jpg';

// Create an array with all the imported images
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

const Partners = () => {
  return (
    <div id="donors" className={styles.slider}>
      <div className={styles.name}>
        <h2 className={styles.title}>FINANȚATORI</h2>
      </div>
      <div className={styles.slideTrack}>
        {images.concat(images).map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
