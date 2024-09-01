import React from 'react';
import styles from './Transparency.module.css';

// Import fișiere PDF


import studem2023 from '../../assetss/task-description-2023.pdf';
import studem2022 from '../../assetss/studem2022.pdf';
import studem2021 from '../../assetss/studem2021.pdf';
import studem2020 from '../../assetss/studem2020.pdf';
import codEtica from '../../assetss/codul-de-etică-ro.docx';
import regulament from '../../assetss/regulamentul-de-funcționare-al-centrului-de-tineret-studem.pdf';

const Transparency = () => {
  const pdfFiles = [
    
    
    { title: 'Studem 2023', path: studem2023 },
    { title: 'Studem 2022', path: studem2022 },
    { title: 'Studem 2021', path: studem2021 },
    { title: 'Studem 2020', path: studem2020 },
    { title: 'Codul de etică', path: codEtica },
    { title: 'Regulamentul de funcționare al centrului de tineret Studem', path: regulament },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.textCenter}>
        <h1 className={styles.sectionHeading}>TRANSPARENȚA</h1>
        <p className={styles.sectionSubheading}>Accesați documentele noastre de transparență</p>
      </div>
      <div className={styles.containerForm}>
        <ul className={styles.downloadLinks}>
          {pdfFiles.map((file, index) => (
            <li key={index} className={styles.infoItem}>
              <a href={file.path} target="_blank" rel="noopener noreferrer">
                {file.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transparency;
