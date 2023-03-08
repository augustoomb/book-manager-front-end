/* eslint-disable react/prop-types */
import styles from './ButtonLogin.module.css';

function ButtonLogin(props) {
  const { children } = props;

  return (
    <button className={ styles.buttonLogin }>
      {children}
    </button>
  );
}

export default ButtonLogin;
