import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faRocket, faHouse, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ListItemsMenu.module.css';

library.add(faMoon, faRocket, faHouse, faBook);

function ListItemsMenu() {
  // const [selectItemMenu, setSelectedItemMenu] = useState('');
  const location = useLocation();
  // setSelectedItemMenu(location.pathname);

  const setClassName = (path) => (
    path === location.pathname ? styles.listItemSelected : styles.listItem);

  useEffect(() => {
    setClassName();
  });

  return (
    <ul className={ styles.list }>
      {/* <li className={ styles.listItem }> */}
      <li className={ setClassName('/home') }>
        <div className={ styles.elements }>
          <FontAwesomeIcon icon="house" />
          <Link to="/home">
            Home
          </Link>
        </div>
      </li>
      {/* <li className={ styles.listItem }> */}
      <li className={ setClassName('/library') }>
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
