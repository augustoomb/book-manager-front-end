import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import InputLogin from '../components/InputLogin';
import ButtonLogin from '../components/ButtonLogin';
import Banner from '../components/Banner';
import TextLinkRegister from '../components/TextLinkRegister';
import styles from './Login.module.css';
import LoginBanner from '../images/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mailValidator = (emailValue) => {
    const validateMailRegex = /\S+@\S+\.\S+/;
    return validateMailRegex.test(emailValue);
  };

  const passValidator = (passValue) => {
    const minLengthPass = 6;
    return passValue.length >= minLengthPass;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <section className={ styles.container }>
      <Banner image={ LoginBanner } />

      <FormLogin onSubmit={ handleSubmit }>
        <InputLogin
          placeholder="Seu e-mail"
          id="email"
          type="email"
          name="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          required
        />
        <InputLogin
          placeholder="Sua senha"
          id="password"
          type="password"
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          required
        />

        <ButtonLogin
          type="submit"
          disabled={
            !(mailValidator(email) && passValidator(password))
          }
        >
          Login

        </ButtonLogin>
      </FormLogin>
      <Link to="/register">
        <TextLinkRegister text="Não tenho cadastro" />
      </Link>
    </section>
  );
}

export default Login;
