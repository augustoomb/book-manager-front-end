import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LogoutButton.module.css';

library.add(faMoon, faRightFromBracket);

function LogoutButton() {
  return (
    <button className={ styles.logoutButton }>
      <FontAwesomeIcon icon="fa-right-from-bracket" />
      Sair
    </button>
  );
}

export default LogoutButton;
