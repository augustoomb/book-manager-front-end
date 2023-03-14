/* eslint-disable react/prop-types */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './Header.module.css';

library.add(faMoon, faMagnifyingGlass);

function Header({ onClick }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.inputArea }>
        <input placeholder="Busca" value={ searchInput } onChange={ handleChange } />
        <button type="button" onClick={ () => onClick(searchInput) }>
          <FontAwesomeIcon icon="fa-magnifying-glass" />
        </button>
      </div>
    </header>
  );
}

export default Header;
