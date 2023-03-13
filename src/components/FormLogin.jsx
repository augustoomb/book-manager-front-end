import styles from './FormLogin.module.css';

// eslint-disable-next-line react/prop-types
function FormLogin({ onSubmit, children }) {
  return (
    <form className={ styles.formLogin } onSubmit={ onSubmit }>
      {children}
    </form>
  );
}

export default FormLogin;
