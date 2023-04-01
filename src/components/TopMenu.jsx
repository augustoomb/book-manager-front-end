// import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faRocket, faHouse, faBook } from '@fortawesome/free-solid-svg-icons';
import styles from './TopMenu.module.css';
import LogoutButton from './LogoutButton';

library.add(faMoon, faRocket, faHouse, faBook);

function TopMenu() {
  const location = useLocation();

  const setLinkMenu = () => {
    if (location.pathname === '/library') {
      return '/home';
    }
    return '/library';
  };

  const setNameMenu = () => {
    if (location.pathname === '/library') {
      return (
        <div>
          <FontAwesomeIcon icon="house" />
          &nbsp;
          <span>Home</span>
        </div>
      );
    }
    return (
      <div>
        <FontAwesomeIcon icon="book" />
        &nbsp;
        <span>Minha Biblioteca</span>
      </div>
    );
  };

  return (
    <div className={ styles.topMenuArea }>
      <Link to={ setLinkMenu() }>
        { setNameMenu() }
      </Link>
      <LogoutButton />
    </div>
  );
}

export default TopMenu;
