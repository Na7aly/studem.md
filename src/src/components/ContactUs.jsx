import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
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
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Contactați-ne</h2>
            <h3 className="section-subheading text-muted">Completați formularul pentru a ne contacta.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
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
                      placeholder="Mesajul "
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
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

export default ContactUs;
