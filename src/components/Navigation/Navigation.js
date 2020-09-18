import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <p className='f4 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
  );
};

export default Navigation;
