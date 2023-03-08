import { Link } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import InputLogin from '../components/InputLogin';
import ButtonLogin from '../components/ButtonLogin';
import Banner from '../components/Banner';
import TextLinkRegister from '../components/TextLinkRegister';
import styles from './Login.module.css';
import LoginBanner from '../images/logo.png';

function Login() {
  return (
    <section className={ styles.container }>
      <Banner image={ LoginBanner } />

      <FormLogin>
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

        <ButtonLogin type="submit">Login</ButtonLogin>
      </FormLogin>
      <Link to="/register">
        <TextLinkRegister text="Não tenho cadastro" />
      </Link>
    </section>
  );
}

export default Login;
