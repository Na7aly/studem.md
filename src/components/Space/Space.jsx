import React from 'react';
import styles from './Space.module.css';

const Space = () => {
  return (
    <section className={styles.space}>
      <div className={styles.container}>
        <h2>APLICĂ PENTRU SPAȚIU</h2>
        <p>
          Centrul de Tineret STUDEM oferă tinerilor șansa de a organiza activități interactive în spațiul centrului GRATUIT. 
          Pentru a profita de spațiu, citește cu atenție termenii și condițiile apoi completează formularul pentru aplicare. 
          Poți beneficia oricând de spațiu și nu uita, suntem aici ș acum pentru tine!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Aplică pentru Evenimente</button>
          <button className={styles.button}>Calendarul STUDEM</button>
        </div>
      </div>
    </section>
  );
}

export default Space;
