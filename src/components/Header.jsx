/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';
import styles from './Header.module.css';

library.add(faMoon, faMagnifyingGlass);

function Header({ onClick, onKeyDown, searchInput, setSearchInput }) {
  // const [searchInput, setSearchInput] = useState('');

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchInput !== '') {
      onKeyDown(searchInput);
    }
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.inputArea }>
        <input
          placeholder="Busca"
          value={ searchInput }
          onChange={ handleChange }
          onKeyDown={ (event) => handleKeyDown(event) }
        />
        <button
          type="button"
          onClick={ () => onClick(searchInput) }
          disabled={ searchInput === '' }
        >
          <FontAwesomeIcon icon="fa-magnifying-glass" />
        </button>
      </div>
    </header>
  );
}

export default Header;
