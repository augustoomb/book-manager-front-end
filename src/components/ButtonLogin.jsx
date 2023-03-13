/* eslint-disable react/prop-types */
import styles from './ButtonLogin.module.css';

function ButtonLogin(props) {
  const { children, type = 'button', disabled, onclick } = props;

  return (
    <button
      className={ styles.buttonLogin }
      disabled={ disabled }
      onClick={ onclick }
      type={ type }
    >
      {children}
    </button>
  );
}

export default ButtonLogin;
