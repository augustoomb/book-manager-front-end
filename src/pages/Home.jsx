import styles from './Home.module.css';
import Header from '../components/Header';
import MenuAside from '../components/MenuAside';

function Home() {
  return (
    <section className={ styles.container }>
      <MenuAside />
      <Header />
      <main>
        <h2>Home Content</h2>
      </main>

    </section>
  );
}

export default Home;
