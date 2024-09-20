import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import TabelComponent from 'components/TabelComponent/TabelComponent';

const ContactPage = () => {
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
        <div className={styles.contactFormWrapper}>
          <div className={styles.textCenter}>
            <h2 className={styles.sectionHeading}>CONTACTAȚI-NE</h2>
            <h3 className={styles.sectionSubheading}>Completați formularul pentru a ne contacta.</h3>
          </div>
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
        <div className={styles.mapWrapper}>
           <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.2337626795274!2d27.916646375600756!3d47.75751997754476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb67cb9eda3699%3A0x2cebd00a578f4881!2sSTUDEM!5e0!3m2!1sru!2sro!4v1724158243752!5m2!1sru!2sro"
    width="100%"
    height="300"
    style={{ border: '0', borderRadius: '10px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps Location"
  ></iframe>
        </div>
      </div>
     
    </section>
    
    
  );
};

export default ContactPage;
