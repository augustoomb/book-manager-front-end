/* eslint-disable react/prop-types */
import styles from './InputLogin.module.css';

function InputLogin({
  placeholder, type = 'text', required = false, id = '',
  value, name = '',
}) {
  return (
    <input
      placeholder={ placeholder }
      type={ type }
      required={ required }
      id={ id }
      value={ value }
      // onChange={ onChange }
      name={ name }
      className={ styles.inputLogin }
    />
  );
}

export default InputLogin;
