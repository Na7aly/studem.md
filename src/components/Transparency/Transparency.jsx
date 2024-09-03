import React from 'react';
import styles from './Transparency.module.css';

// Import images and PDFs
import studem2023 from '../../assetss/task-description-2023.pdf';
import studem2022 from '../../assetss/studem2022.pdf';
import studem2021 from '../../assetss/studem2021.pdf';
import studem2020 from '../../assetss/studem2020.pdf';
import codEtica from '../../assetss/codul-de-etică-ro.docx';
import regulament from '../../assetss/regulamentul-de-funcționare-al-centrului-de-tineret-studem.pdf';

// Import images for the cards
import image2023 from '../../img/desc-funct.png'; // Replace with actual image paths
import image2022 from '../../img/rostudem22.jpg';
import image2021 from '../../img/rostudem21.png';
import image2020 from '../../img/rostudem20.png';
import codEticaImage from '../../img/codetica.png';
import regulamentImage from '../../img/regulament.png';

const Transparency = () => {
  const pdfFiles = [
    { title: 'Studem 2023', path: studem2023, image: image2023 },
    { title: 'Studem 2022', path: studem2022, image: image2022 },
    { title: 'Studem 2021', path: studem2021, image: image2021 },
    { title: 'Studem 2020', path: studem2020, image: image2020 },
    { title: 'Codul de etică', path: codEtica, image: codEticaImage },
    { title: 'Regulamentul de funcționare al centrului de tineret Studem', path: regulament, image: regulamentImage },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.textCenter}>
        <h1 className={styles.sectionHeading}>TRANSPARENȚA</h1>
        <p className={styles.sectionSubheading}>Accesați documentele noastre de transparență</p>
      </div>
      <div className={styles.cardGrid}>
        {pdfFiles.map((file, index) => (
          <div key={index} className={styles.card}>
            <a href={file.path} target="_blank" rel="noopener noreferrer">
              <img src={file.image} alt={file.title} className={styles.cardImage} />
              <div className={styles.cardTitle}>{file.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transparency;
