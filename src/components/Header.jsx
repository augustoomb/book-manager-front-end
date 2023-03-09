import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';

library.add(faMoon, faMagnifyingGlass);

function Header() {
  return (
    <header className={ styles.header }>
      <div className={ styles.inputArea }>
        <input placeholder="Busca" />
        <button type="button">
          <FontAwesomeIcon icon="fa-magnifying-glass" />
        </button>
      </div>
    </header>
  );
}

export default Header;
