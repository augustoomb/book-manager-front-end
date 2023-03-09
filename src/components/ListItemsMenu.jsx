import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faRocket, faHouse, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ListItemsMenu.module.css';

library.add(faMoon, faRocket, faHouse, faBook);

function ListItemsMenu() {
  return (
    <ul className={ styles.list }>
      <li className={ styles.listItem }>
        <div className={ styles.elements }>
          <FontAwesomeIcon icon="house" />
          <Link to="/home">
            Home
          </Link>
        </div>
      </li>
      <li className={ styles.listItem }>
        <div className={ styles.elements }>
          <FontAwesomeIcon icon="book" />
          <Link to="/library">
            Minha Biblioteca
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default ListItemsMenu;
