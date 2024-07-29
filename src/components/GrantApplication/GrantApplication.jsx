import React, { useState } from 'react';
import styles from './GrantApplication.module.css'; 

const GrantApplication = () => {
  const [formData, setFormData] = useState({
    initiativeName: '',
    leaderName: '',
    leaderEmail: '',
    document: null,
    confirmation: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { id, value, type, checked, files } = event.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.initiativeName) newErrors.initiativeName = 'Denumirea grupului este obligatorie.';
    if (!formData.leaderName) newErrors.leaderName = 'Numele liderului este obligatoriu.';
    if (!formData.leaderEmail || !/\S+@\S+\.\S+/.test(formData.leaderEmail)) newErrors.leaderEmail = 'Email-ul liderului este invalid.';
    if (!formData.document) newErrors.document = 'Trebuie să încarci documentele necesare.';
    if (!formData.confirmation) newErrors.confirmation = 'Trebuie să confirmi că informațiile sunt corecte.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Formularul a fost trimis cu succes!');
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.textCenter}>
        <h2 className={styles.sectionHeading}>Apel de granturi pentru inițiativele de tineret din Municipiul Bălți</h2>
        <p className={styles.sectionSubheading}>
          Programul de Granturi Mici este accesibil pentru orice grup de tineri cu vârsta cuprinsă între 14-25 de ani, din Bălți, care vor să remedieze o problemă din comunitate.
        </p>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactWrapper}>
          <p><strong>Ce proiecte pot fi finanțate:</strong></p>
          <ul>
            <li>Să răspundă într-un mod inovator unei nevoi identificate la nivelul comunității.</li>
            <li>Să permită obținerea unor rezultate clare, vizibile.</li>
            <li>Să aibă un impact pe termen lung.</li>
            <li>Să ofere condiții sigure de petrecere a timpului liber pentru tineri.</li>
            <li>Să fie antrenante și plăcute.</li>
          </ul>
          <p><strong>Pentru a participa, trebuie să:</strong></p>
          <ol>
            <li>Analizezi Ghidul de Finanțare</li>
            <li>Completezi Formularul de Finanțare</li>
            <li>Transmiți Formularul pe poșta <a href="mailto:pgm@studem.md">pgm@studem.md</a></li>
            <li>Confirmi finanțarea din partea STUDEM</li>
            <li>Semnezi acordul de subgrant</li>
            <li>Implementați proiectul</li>
          </ol>
          <div className={styles.downloadLinks}>
  <div><a href="/public/pdf/mpdf.pdf" download>Ghidul de Finanțare</a></div>
  <div><a href="/path-to/application-form.pdf" download>Formularul de Aplicare</a></div>
  <div><a href="/path-to/subgrant-agreement.pdf" download>Contractul de Subgrant</a></div>
  <div><a href="/path-to/report-form.pdf" download>Formularul de Raportare</a></div>
</div>

        </div>
        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="initiativeName">Denumirea grupului de Inițiativă</label>
              <input
                type="text"
                id="initiativeName"
                value={formData.initiativeName}
                onChange={handleInputChange}
                className={styles.formControl}
              />
              {errors.initiativeName && <span className={styles.error}>{errors.initiativeName}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="leaderName">Liderul grupului de inițiativă</label>
              <input
                type="text"
                id="leaderName"
                value={formData.leaderName}
                onChange={handleInputChange}
                className={styles.formControl}
              />
              {errors.leaderName && <span className={styles.error}>{errors.leaderName}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="leaderEmail">Adresa electronică a liderului grupului de inițiativă</label>
              <input
                type="email"
                id="leaderEmail"
                value={formData.leaderEmail}
                onChange={handleInputChange}
                className={styles.formControl}
              />
              {errors.leaderEmail && <span className={styles.error}>{errors.leaderEmail}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="document">Încarcă documentul/documentele</label>
              <input
                type="file"
                id="document"
                onChange={handleInputChange}
                className={styles.formControl}
              />
              {errors.document && <span className={styles.error}>{errors.document}</span>}
            </div>
            <div className={styles.formGroup}>
              <label>
                <input
                  type="checkbox"
                  id="confirmation"
                  checked={formData.confirmation}
                  onChange={handleInputChange}
                />
                Confirm că informația menționată în formularul de grant și mai sus este corectă.
              </label>
              {errors.confirmation && <span className={styles.error}>{errors.confirmation}</span>}
            </div>
            <button type="submit" className={styles.submitButton}>Trimite formularul de grant</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GrantApplication;
