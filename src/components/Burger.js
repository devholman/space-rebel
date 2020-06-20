import React from 'react';
import styles from './burger.module.css';

const Burger = () => {
  return (
    <Burger className={styles.burger}>
      <div className={styles.lines} />
      <div className={styles.lines} />
      <div className={styles.lines} />
    </Burger>
  );
};

export default Burger;
