import styles from './FormLogin.module.css';

// eslint-disable-next-line react/prop-types
function FormLogin({ children }) {
  return (
    <form className={ styles.formLogin }>
      {children}
    </form>
  );
}

export default FormLogin;
