import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../redux/slices/user';
import styles from './LogoutButton.module.css';
import removeTokenInLocalStorage from '../utils/removeTokenInLocalStorage';

library.add(faMoon, faRightFromBracket);

function LogoutButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeToken());
    removeTokenInLocalStorage();
    navigate({ pathname: '/' });
  };

  return (
    <button className={ styles.logoutButton } onClick={ () => handleClick() }>
      <FontAwesomeIcon icon="fa-right-from-bracket" />
      Sair
    </button>
  );
}

export default LogoutButton;
