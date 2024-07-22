import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './SpaceApplication.module.css'; // Asigură-te că numele este corect

// Setează elementul root pentru modal
Modal.setAppElement('#root');

const SpaceApplication = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    organizationName: '',
    phone: '',
    date: '',
    email: '',
    eventName: '',
    eventDescription: '',
    startTime: '',
    endTime: '',
    participants: '',
    agreement: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Numele este obligatoriu';
    if (!formData.lastName) newErrors.lastName = 'Prenumele este obligatoriu';
    if (!formData.organization) newErrors.organization = 'Organizația este obligatorie';
    if (!formData.organizationName) newErrors.organizationName = 'Denumirea organizației este obligatorie';
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Numărul de telefon nu este valid';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Email-ul nu este valid';
    if (!formData.date) newErrors.date = 'Data este obligatorie';
    if (!formData.eventName) newErrors.eventName = 'Denumirea evenimentului este obligatorie';
    if (!formData.eventDescription) newErrors.eventDescription = 'Descrierea evenimentului este obligatorie';
    if (!formData.startTime) newErrors.startTime = 'Ora de început este obligatorie';
    if (!formData.endTime) newErrors.endTime = 'Ora de sfârșit este obligatorie';
    if (!formData.participants || formData.participants <= 0) newErrors.participants = 'Numărul de participanți trebuie să fie pozitiv';
    if (!formData.agreement) newErrors.agreement = 'Trebuie să accepți regulile centrului';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/space-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Aplicația a fost trimisă cu succes!');
        handleReset();
      } else {
        alert('A apărut o eroare la trimiterea aplicației.');
      }
    } catch (error) {
      console.error('Eroare la trimiterea aplicației:', error);
      alert('A apărut o eroare la trimiterea aplicației. Te rugăm să încerci din nou mai târziu.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      organization: '',
      organizationName: '',
      phone: '',
      date: '',
      email: '',
      eventName: '',
      eventDescription: '',
      startTime: '',
      endTime: '',
      participants: '',
      agreement: false
    });
    setErrors({});
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className={styles.spaceApplication}>
      <div className={styles.container}>
        <h2>Spațiu gratuit pentru orice inițiativă de tineret</h2>
        <ul className={styles.rulesList}>
          {/* Reguli */}
        </ul>
        <h3>Aplică pentru a beneficia de spațiu</h3>
        <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
          {/* Formular */}
          <div className={styles.formGroup}>
            <label htmlFor="firstName">Nume</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Prenume</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="organization">Organizația</label>
            <input
              type="text"
              id="organization"
              value={formData.organization}
              onChange={handleInputChange}
              required
            />
            {errors.organization && <span className={styles.error}>{errors.organization}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="organizationName">Denumirea organizației</label>
            <input
              type="text"
              id="organizationName"
              value={formData.organizationName}
              onChange={handleInputChange}
              required
            />
            {errors.organizationName && <span className={styles.error}>{errors.organizationName}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Numărul de telefon</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date">Data</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
            {errors.date && <span className={styles.error}>{errors.date}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="eventName">Denumirea evenimentului</label>
            <input
              type="text"
              id="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              required
            />
            {errors.eventName && <span className={styles.error}>{errors.eventName}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="eventDescription">Descrierea evenimentului</label>
            <textarea
              id="eventDescription"
              value={formData.eventDescription}
              onChange={handleInputChange}
              required
            ></textarea>
            {errors.eventDescription && <span className={styles.error}>{errors.eventDescription}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="startTime">Ora de început</label>
            <input
              type="time"
              id="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              required
            />
            {errors.startTime && <span className={styles.error}>{errors.startTime}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="endTime">Ora de sfârșit</label>
            <input
              type="time"
              id="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              required
            />
            {errors.endTime && <span className={styles.error}>{errors.endTime}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="participants">Numărul de participanți</label>
            <input
              type="number"
              id="participants"
              value={formData.participants}
              onChange={handleInputChange}
              required
              min="1"
            />
            {errors.participants && <span className={styles.error}>{errors.participants}</span>}
          </div>
          <div className={styles.formGroup}>
            {/* <label>
              <input
                type="checkbox"
                id="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
              />
              Confirm că sunt de acord cu regulile centrului cu privire la utilizarea spațiului și cu declarația pe propria răspundere de folosire a spațiului.
            </label> */}
            {errors.agreement && <span className={styles.error}>{errors.agreement}</span>}
            <span
              className={styles.agreementLink}
              onClick={openModal}
              style={{ cursor: 'pointer', color: '#007bff' }}
            >
              Confirm că sunt de acord cu regulile centrului cu privire la utilizarea spațiului și cu declarația pe propria răspundere de folosire a spațiului.
            </span>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Încărcare...' : 'Trimite'}
            </button>
            <button type="reset" className={styles.resetButton}>Resetează</button>
          </div>
        </form>
      </div>

      {/* Modalul */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Reguli de Utilizare"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Reguli de Utilizare a Spațiului</h2>
        <ul>
          <li>Aplicarea pentru spațiu se face cu minim 3 zile înainte de activitate.</li>
          <li>Consumabilele(materialele) necesare pentru activitate nu pot fi achiziționate/împrumutate de la STUDEM.</li>
          <li>Spațiul trebuie reîntors exact în starea în care a fost primit (după orice activitate se face curățenie, mobilierul este aranjat ca la primirea spațiului).</li>
          <li>Toate bunurile din cadrul centrului nu trebuie sa fie deteriorate.</li>
          <li>Centrul nu duce răspundere de lucrurile personale ale beneficiarilor.</li>
          <li>Nu aruncați fotoliile sac în aer și nu săriți pe ele!</li>
          <li>Dacă înainte sau după activitatea dvs. este un alt eveniment atunci este nevoie de o pauză de minim 1 ora.</li>
          <li>În cadrul activităților dvs. nu trebuie să se promoveze violența și discriminarea.</li>
          <li>În cazul în care mobilierul sau alt bun al centrului va fi deteriorat după evenimentul dvs., acesta va fi reparat/cumpărat de către dvs.</li>
          <li>La începutul activităţii se semnează acordul pe proprie răspundere, în care este stipulat că dvs sunteți de acord cu toate regulile stipulate de către Centrul de Tineret- STUDEM. În cazul în care acordul nu este semnat de către organizator, spațiul nu este oferit.</li>
        </ul>
        <button onClick={closeModal} className={styles.closeButton}>Închide</button>
      </Modal>
    </section>
  );
};

export default SpaceApplication;
