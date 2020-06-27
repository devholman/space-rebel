import React, { useState } from 'react';
import styles from './burger.module.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';
import PrimaryCTA from './buttons/PrimaryCTA';

const Burger = ({ navLinks }) => {
  const [closeMenu, setCloseMenu] = useState(false);

  const handleStateChange = (state) => {
    setCloseMenu(state.isOpen);
  };

  return (
    <Menu
      right
      noOverlay
      disableAutoFocus
      isOpen={closeMenu}
      burgerButtonClassName={styles.burgerButtonContainer}
      burgerBarClassName={styles.burgerBars}
      crossButtonClassName={styles.crossBtn}
      crossClassName={styles.cross}
      menuClassName={styles.menu}
      itemListClassName={styles.itemList}
      onStateChange={(state) => {
        handleStateChange(state);
      }}
      className={'top-0'}
    >
      {navLinks.map((linkText, i) => {
        return (
          <Link
            to={`/#${linkText.toLowerCase()}`}
            key={i + 1}
            className={'menu-item'}
            onClick={() => setCloseMenu(false)}
          >
            {linkText}
          </Link>
        );
      })}
      <div className={'mx-4 my-12'}>
        <PrimaryCTA classes={'my-4'} />
      </div>
    </Menu>
  );
};
// const Burger = () => {
//   return (
//     <Burger className={styles.burger}>
//       <div className={styles.lines} />
//       <div className={styles.lines} />
//       <div className={styles.lines} />
//     </Burger>
//   );
// };

export default Burger;
