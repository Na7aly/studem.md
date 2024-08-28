import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './SpaceApplication.module.css';
import RulesContent from '../RulesContent';

// Set the element root for the modal
Modal.setAppElement('#root');

const SpaceApplication = ({ closeModal }) => {
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
  const [rulesModalIsOpen, setRulesModalIsOpen] = useState(false);

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
      const response = await fetch('https://formspree.io/f/mnnadzan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Aplicația a fost trimisă cu succes!');
        handleReset();
        closeModal();
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

  const openRulesModal = () => {
    setRulesModalIsOpen(true);
  };

  const closeRulesModal = () => {
    setRulesModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Aplicație pentru Spațiu"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={closeModal} className={styles.closeButton}>X</button>
      <div className={styles.spaceApplication}>
        <div className={styles.container}>
          <h2>Aplică pentru a beneficia de spațiu</h2>
          <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
            {/* Form fields */}
            <div className={styles.formGroup}>
              <label htmlFor="firstName">Nume</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
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
                name="lastName"
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
                name="organization"
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
                name="organizationName"
                value={formData.organizationName}
                onChange={handleInputChange}
                required
              />
              {errors.organizationName && <span className={styles.error}>{errors.organizationName}</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
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
                name="date"
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
                name="email"
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
                name="eventName"
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
                name="eventDescription"
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
                name="startTime"
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
                name="endTime"
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
                name="participants"
                value={formData.participants}
                onChange={handleInputChange}
                required
              />
              {errors.participants && <span className={styles.error}>{errors.participants}</span>}
            </div>
            <div className={styles.formGroup}>
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="agreement">
                Sunt de acord cu <button type="button" className={styles.rulesButton} onClick={openRulesModal}>Regulile centrului</button>
              </label>
              {errors.agreement && <span className={styles.error}>{errors.agreement}</span>}
            </div>
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Se încarcă...' : 'Trimite'}
            </button>
          </form>
        </div>
      </div>

      <Modal
        isOpen={rulesModalIsOpen}
        onRequestClose={closeRulesModal}
        contentLabel="Regulile centrului"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button onClick={closeRulesModal} className={styles.closeButton}>X</button>
        <div className={styles.rulesContainer}>
          <h2>Regulile centrului</h2>
          <RulesContent />
        </div>
      </Modal>
    </Modal>
  );
};

export default SpaceApplication;
