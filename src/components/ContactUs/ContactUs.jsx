// import React, { useState } from 'react';
// import styles from './ContactUs.module.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     phone: '',
//     message: ''
//   });

//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const endpoint = 'http://localhost:5000/api/contact';

//     try {
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         alert('Mesajul a fost trimis cu succes!');
//         setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
//       } else {
//         alert('A apărut o eroare la trimiterea mesajului.');
//       }
//     } catch (error) {
//       console.error('Eroare la trimiterea datelor:', error);
//       alert('A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou mai târziu.');
//     }
//   };

//   return (
//     <section id="contact">
//       <div className={styles.container}>
//         <div className={styles.contactInfo}>
//           <div className={styles.infoItem}>
//             <i className="fas fa-map-marker-alt"></i>
//             <span>ADRESA</span>
//             <p>Strada Alexandr Puskin 19, etajul 3, Bălți, Moldova</p>
//           </div>
//           <div className={styles.infoItem}>
//             <i className="fas fa-phone"></i>
//             <span>TELEFON</span>
//             <p>+373 (60) 229996 - Constantin Curca</p>
//             <p>+373 (79) 971786 - Ioan-Giuliano Ciomschi</p>
//           </div>
//           <div className={styles.infoItem}>
//             <i className="fas fa-envelope"></i>
//             <span>EMAIL</span>
//             <p>youth.center@studem.md</p>
//             <p>studem.balti@gmail.com</p>
//           </div>
//           <div className={styles.infoItem}>
//             <i className="fas fa-clock"></i>
//             <span>ORELE DE LUCRU</span>
//             <p>Luni - Duminică: 10.00-22.00</p>
//           </div>
//         </div>
//         <div className={styles.contactForm}>
//           <div className={styles.textCenter}>
//             <h2 className={styles.sectionHeading}>Contactați-ne</h2>
//             <h3 className={styles.sectionSubheading}>Completați formularul pentru a ne contacta.</h3>
//           </div>
//           <form id="contactForm" onSubmit={handleSubmit}>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 className={styles.formControl}
//                 placeholder="Numele"
//                 id="name"
//                 required
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="email"
//                 className={styles.formControl}
//                 placeholder="Email"
//                 id="email"
//                 required
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 className={styles.formControl}
//                 placeholder="Subiectul"
//                 id="subject"
//                 required
//                 value={formData.subject}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 className={styles.formControl}
//                 placeholder="Numărul de telefon"
//                 id="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <textarea
//                 className={styles.formControl}
//                 placeholder="Mesajul"
//                 id="message"
//                 required
//                 value={formData.message}
//                 onChange={handleInputChange}
//               ></textarea>
//             </div>
//             <div className={styles.textCenter}>
//               <button type="submit" className={styles.btnXL}>Trimite mesaj</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
