import React, { useState } from 'react';
import styles from './Space.module.css';
import SpaceApplication from '../SpaceApplication/SpaceApplication';

const Space = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const goToCalendar = () => {
    window.location.href = 'https://calendar.online/79f4f06d7e7088f52c5e';
  };

  return (
    <section className={styles.space}>
      <div className={styles.container}>
        <h2>Spațiu gratuit pentru orice inițiativă de tineret</h2>
        <p>
          Centrul de Tineret STUDEM oferă tinerilor șansa de a organiza activități interactive în spațiul centrului GRATUIT. 
          Pentru a profita de spațiu, citește cu atenție termenii și condițiile apoi completează formularul pentru aplicare. 
          Poți beneficia oricând de spațiu și nu uita, suntem aici și acum pentru tine!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={openModal}>Aplică pentru evenimente</button>
          <button className={styles.button} onClick={goToCalendar}>Calendarul STUDEM</button>
        </div>
      </div>

      {/* Modalul se afișează doar dacă modalIsOpen este true */}
      {modalIsOpen && <SpaceApplication closeModal={closeModal} />}
    </section>
  );
};

export default Space;
