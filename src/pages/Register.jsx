import { Link } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import InputLogin from '../components/InputLogin';
import ButtonLogin from '../components/ButtonLogin';
import Banner from '../components/Banner';
import TextLinkRegister from '../components/TextLinkRegister';
import styles from './Login.module.css';
import LoginBanner from '../images/logo.png';

function Register() {
  return (
    <section className={ styles.container }>
      <Banner image={ LoginBanner } />

      <FormLogin>
        <InputLogin
          placeholder="Seu nome"
          //   type="text"
          name="nome"
          required
        />
        <InputLogin
          placeholder="Seu e-mail"
          type="email"
          name="email"
          required
        />
        <InputLogin
          placeholder="Sua senha"
          type="password"
          name="password"
          required
        />

        <ButtonLogin type="submit">Cadastrar</ButtonLogin>
      </FormLogin>
      <Link to="/">
        <TextLinkRegister text="Já tenho cadastro" />
      </Link>
    </section>
  );
}

export default Register;
