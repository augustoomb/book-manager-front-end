import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormLogin from '../components/FormLogin';
import InputLogin from '../components/InputLogin';
import ButtonLogin from '../components/ButtonLogin';
import Banner from '../components/Banner';
import TextLinkRegister from '../components/TextLinkRegister';
import styles from './Login.module.css';
import LoginBanner from '../images/logo.png';
import SpanLoginStatus from '../components/SpanLoginStatus';
import { registerRequest } from '../services/user';
import { setToken } from '../redux/slices/user';
import setTokenInLocalStorage from '../utils/setTokenInLocalStorage';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [spanStatus, setSpanStatus] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameValidator = (nameValue) => {
    const minLengthName = 3;
    return nameValue.length >= minLengthName;
  };

  const mailValidator = (emailValue) => {
    // eslint-disable-next-line no-useless-escape
    const validateMailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return validateMailRegex.test(emailValue);
  };

  const passValidator = (passValue) => {
    const minLengthPass = 6;
    return passValue.length >= minLengthPass;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const role = 0;
    const token = await registerRequest(name, email, password, role);
    if (token.error) {
      setSpanStatus(token.error);
    } else {
      dispatch(setToken({ token }));
      setTokenInLocalStorage(token);
      navigate({ pathname: '/home' });
    }
  };

  const changeInput = (target) => {
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'email') {
      setEmail(target.value);
    }
    if (target.name === 'password') {
      setPassword(target.value);
    }
    setSpanStatus('');
  };

  return (
    <section className={ styles.container }>
      <Banner image={ LoginBanner } />

      <FormLogin onSubmit={ handleSubmit }>
        <InputLogin
          placeholder="Seu nome"
          id="name"
          type="text"
          name="name"
          value={ name }
          onChange={ ({ target }) => changeInput(target) }
          required
        />
        <InputLogin
          placeholder="Seu e-mail"
          id="email"
          type="email"
          name="email"
          value={ email }
          // onChange={ ({ target }) => setEmail(target.value) }
          onChange={ ({ target }) => changeInput(target) }
          required
        />
        <InputLogin
          placeholder="Sua senha"
          id="password"
          type="password"
          name="password"
          value={ password }
          // onChange={ ({ target }) => setPassword(target.value) }
          onChange={ ({ target }) => changeInput(target) }
          required
        />

        <SpanLoginStatus text={ spanStatus } />

        <ButtonLogin
          type="submit"
          disabled={
            !(mailValidator(email) && passValidator(password) && nameValidator(name))
          }
        >
          Cadastrar

        </ButtonLogin>
      </FormLogin>
      <Link to="/">
        <TextLinkRegister text="Já tenho cadastro" />
      </Link>
    </section>
  );
}

export default Register;
