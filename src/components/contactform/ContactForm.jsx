import React,  { useState } from 'react';
import styles from '../../components/ContactPage/ContactPage.module.css'; // Importă stilurile module

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnnadzan", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Mesajul a fost trimis cu succes!');
        setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
      } else {
        alert('A apărut o eroare la trimiterea mesajului.');
      }
    } catch (error) {
      console.error('Eroare la trimiterea datelor:', error);
      alert('A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou mai târziu.');
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.contactContainer}>
        <div className={styles.textCenter}>
          <h2 className={styles.sectionHeading}>Contactați-ne</h2>
          <h3 className={styles.sectionSubheading}>Completați formularul pentru a ne contacta.</h3>
        </div>
        <div className={styles.containerForm}>
          <div className={styles.contactFormWrapper}>
            <div className={styles.contactForm}>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formColumn}>
                    <div className={styles.formGroup}>
                      <input
                        type="text"
                        className={styles.formControl}
                        placeholder="Numele"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        name="name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input
                        type="email"
                        className={styles.formControl}
                        placeholder="Email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        name="email"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input
                        type="text"
                        className={styles.formControl}
                        placeholder="Subiectul"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        name="subject"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input
                        type="text"
                        className={styles.formControl}
                        placeholder="Numărul de telefon"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className={styles.formColumn}>
                    <div className={styles.formGroup}>
                      <textarea
                        className={styles.formControl}
                        placeholder="Mesajul"
                        id="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className={styles.textCenter}>
                  <button type="submit" className={styles.submitButton}>Trimite mesaj</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
