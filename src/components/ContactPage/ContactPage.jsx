import React, { useState } from 'react';
import styles from './ContactPage.module.css'; // Asigură-te că stilurile sunt corecte

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
    const endpoint = 'http://localhost:5000/api/contact';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
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
        <div className="text-center">
            <h2 className="section-heading">Contactați-ne</h2>
            <h3 className="section-subheading text-muted">Completați formularul pentru a ne contacta.</h3>
          </div>

        <div className={styles.contactContainer}>
        
      <div className={styles.contactWrapper}>
        
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <i className="fas fa-map-marker-alt"></i>
            <span>ADRESA</span>
            <p>Strada Alexandr Puskin 19, etajul 3, Bălți, Moldova</p>
          </div>
          <div className={styles.infoItem}>
            <i className="fas fa-phone"></i>
            <span>TELEFON</span>
            <p>+373 (60) 229996 - Constantin Curca</p>
            <p>+373 (79) 971786 - Ioan-Giuliano Ciomschi</p>
          </div>
          <div className={styles.infoItem}>
            <i className="fas fa-envelope"></i>
            <span>EMAIL</span>
            <p>youth.center@studem.md</p>
            <p>studem.balti@gmail.com</p>
          </div>
          <div className={styles.infoItem}>
            <i className="fas fa-clock"></i>
            <span>ORELE DE LUCRU</span>
            <p>Luni - Duminică: 10.00-22.00</p>
          </div>
        </div>

        <div className={styles.contactForm}>
          {/* <div className="text-center">
            <h2 className="section-heading">Contactați-ne</h2>
            <h3 className="section-subheading text-muted">Completați formularul pentru a ne contacta.</h3>
          </div> */}
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Numele"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subiectul"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Numărul de telefon"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Mesajul"
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="text-center">
                <button type="submit" className="btn btn-xl">Trimite mesaj</button>
              </div>
            </div>
          </form>
        </div>
      </div>
        </div>
       
    </section>
  );
};

export default ContactPage;
