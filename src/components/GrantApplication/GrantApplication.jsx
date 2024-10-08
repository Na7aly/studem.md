import React, { useState } from 'react';
import styles from './GrantApplication.module.css';

import ghid from '../../assetss/GHID DE FINANŢARE.docx';
import model from '../../assetss/Model de buget detaliat.docx';
import formular from '../../assetss/Formular de aplicare.docx';

const GrantApplication = () => {
  const [formData, setFormData] = useState({
    initiativeName: '',
    leaderName: '',
    leaderEmail: '',
    document: [],
    confirmation: false,
  });

  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (event) => {
    const { id, value, type, checked, files } = event.target;
    if (type === 'file') {
      setFormData((prevState) => ({
        ...prevState,
        document: [...prevState.document, ...Array.from(files)],
      }));
    } else {
      setFormData({
        ...formData,
        [id]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.initiativeName)
      newErrors.initiativeName = 'Denumirea grupului este obligatorie.';
    if (!formData.leaderName)
      newErrors.leaderName = 'Numele liderului este obligatoriu.';
    if (!formData.leaderEmail || !/\S+@\S+\.\S+/.test(formData.leaderEmail))
      newErrors.leaderEmail = 'Email-ul liderului este invalid.';
    if (!formData.document || formData.document.length === 0)
      newErrors.document = 'Trebuie să încarci documentele necesare.';
    if (!formData.confirmation)
      newErrors.confirmation = 'Trebuie să confirmi că informațiile sunt corecte.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setUploading(true);
      try {
        const documentUrls = [];

        for (const file of formData.document) {
          const formDataToUpload = new FormData();
          formDataToUpload.append('file', file);
          formDataToUpload.append('upload_preset', 'zmwzm6dh'); // Cloudinary preset

          const cloudinaryResponse = await fetch(
            'https://api.cloudinary.com/v1_1/dbwamoqoc/upload',
            {
              method: 'POST',
              body: formDataToUpload,
            }
          );

          const cloudinaryData = await cloudinaryResponse.json();

          if (cloudinaryResponse.ok) {
            documentUrls.push(cloudinaryData.secure_url);
          } else {
            console.error('Eroare la încărcarea fișierului:', cloudinaryData);
            alert(
              'A apărut o eroare la încărcarea fișierului. Te rugăm să încerci din nou mai târziu.'
            );
            return;
          }
        }

        const formDataToSend = {
          initiativeName: formData.initiativeName,
          leaderName: formData.leaderName,
          leaderEmail: formData.leaderEmail,
          documentUrls, // Trimite toate URL-urile fișierelor încărcate
          confirmation: formData.confirmation ? 'true' : 'false',
          _subject: 'Formular de aplicare grant', // Adăugăm subiectul personalizat
        };

        const response = await fetch('https://formspree.io/f/xdkonooq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
        });

        if (response.ok) {
          alert('Formularul a fost trimis cu succes!');
          setFormData({
            initiativeName: '',
            leaderName: '',
            leaderEmail: '',
            document: [],
            confirmation: false,
          });
        } else {
          const result = await response.json();
          console.error('Eroare la trimiterea datelor:', result);
          alert(
            `A apărut o eroare: ${
              result.errors
                ? result.errors.map((e) => e.message).join(', ')
                : 'Necunoscută'
            }`
          );
        }
      } catch (error) {
        console.error('Eroare la trimiterea datelor:', error);
        alert(
          'A apărut o eroare la trimiterea formularului. Te rugăm să încerci din nou mai târziu.'
        );
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.textCenter}>
        <h2 className={styles.sectionHeading}>
          Apel de granturi pentru inițiativele de tineret din Municipiul Bălți
        </h2>
        <p className={styles.sectionSubheading}>
          Programul de Granturi Mici este accesibil pentru orice grup de tineri
          cu vârsta cuprinsă între 14-25 de ani, din Bălți, care vor să
          remedieze o problemă din comunitate.
        </p>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactWrapper}>
          <p>
            <strong>Ce proiecte pot fi finanțate:</strong>
          </p>
          <ul>
            <li>
              Să răspundă într-un mod inovator unei nevoi identificate la nivelul
              comunității.
            </li>
            <li>Să permită obținerea unor rezultate clare, vizibile.</li>
            <li>Să aibă un impact pe termen lung.</li>
            <li>
              Să ofere condiții sigure de petrecere a timpului liber pentru
              tineri.
            </li>
            <li>Să fie antrenante și plăcute.</li>
          </ul>
          <p>
            <strong>Pentru a participa, trebuie să:</strong>
          </p>
          <ol>
            <li>Analizezi Ghidul de Finanțare</li>
            <li>Completezi Formularul de Finanțare</li>
            <li>
              Transmiți Formularul pe poșta{' '}
              <a href="mailto:pgm@studem.md">pgm@studem.md</a>
            </li>
            <li>Confirmi finanțarea din partea STUDEM</li>
            <li>Semnezi acordul de subgrant</li>
            <li>Implementați proiectul</li>
          </ol>
          <div className={styles.downloadLinks}>
            <div>
              <a href={ghid} download>
                Ghidul de Finanțare
              </a>
            </div>
            <div>
              <a href={formular} download>
                Formularul de Aplicare
              </a>
            </div>
            <div>
              <a href={model} download>
                Model de buget
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="initiativeName">
                Denumirea grupului de Inițiativă
              </label>
              <input
                type="text"
                id="initiativeName"
                name="initiativeName"
                value={formData.initiativeName}
                onChange={handleInputChange}
                className={styles.formControl}
              />
              {errors.initiativeName && (
                <span className={styles.error}>{errors.initiativeName}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="leaderName">Liderul grupului de inițiativă</label>
              <input
                type="text"
                id="leaderName"
                name="leaderName"
                value={formData.leaderName}
                onChange={handleInputChange}
                className={styles.formControl}
              />
              {errors.leaderName && (
                <span className={styles.error}>{errors.leaderName}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="leaderEmail">
                Adresa electronică a liderului grupului de inițiativă
              </label>
              <input
                type="email"
                id="leaderEmail"
                name="leaderEmail"
                value={formData.leaderEmail}
                onChange={handleInputChange}
                className={styles.formControl}
              />
              {errors.leaderEmail && (
                <span className={styles.error}>{errors.leaderEmail}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="document">Încarcă documentul/documentele</label>
              <input
                type="file"
                id="document"
                name="document"
                onChange={handleInputChange}
                className={styles.formControl}
                multiple
              />
              {errors.document && (
                <span className={styles.error}>{errors.document}</span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleInputChange}
                />
                Confirm că informația menționată în formularul de grant și mai sus este corectă.
              </label>
              {errors.confirmation && (
                <span className={styles.error}>{errors.confirmation}</span>
              )}
            </div>
            <button type="submit" className={styles.submitButton}>
              {uploading ? 'Se încarcă...' : 'Trimite formularul'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GrantApplication;
