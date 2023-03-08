import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faRocket, faHouse, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuAside.module.css';
import LoginBanner from '../images/logo.png';
import Banner from './Banner';
import LogoutButton from './LogoutButton';

library.add(faMoon, faRocket, faHouse, faBook);

function MenuAside() {
  return (
    <aside className={ styles.menuAside }>
      <div className={ styles.menuAsideTop }>
        <Banner image={ LoginBanner } />

        <ul className={ styles.list }>
          <li className={ styles.listItem }>
            <FontAwesomeIcon icon="house" />
            <Link to="/home">
              Home
            </Link>
          </li>
          <li className={ styles.listItem }>
            <FontAwesomeIcon icon="book" />
            <Link to="/library">
              Minha Biblioteca
            </Link>
          </li>
        </ul>
      </div>

      <LogoutButton />

    </aside>
  );
}

export default MenuAside;
