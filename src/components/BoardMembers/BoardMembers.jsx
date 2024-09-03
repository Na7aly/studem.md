import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BoardMembers.module.css';

// Import images
import board2020Img from '../../img/2020.jpg';
import board2021Img from '../../img/2021.jpg';
import board2022Img from '../../img/2022.jpg';
import board2023Img from '../../img/2023.jpg';

const BoardMembers = () => {
  const boardYears = [
    { year: 2020, image: board2020Img },
    { year: 2021, image: board2021Img },
    { year: 2022, image: board2022Img },
    { year: 2023, image: board2023Img },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Selectează Membrii Boardului</h1>
      <div className={styles.grid}>
        {boardYears.map((board, index) => (
          <Link to={`/board/${board.year}`} key={index} className={styles.card}>
            <img src={board.image} alt={`Membrii Boardului ${board.year}`} className={styles.image} />
            {/* <div className={styles.title}>Membrii Boardului {board.year}</div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
