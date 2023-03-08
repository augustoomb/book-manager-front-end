import styles from './Home.module.css';
import Header from '../components/Header';
import MenuAside from '../components/MenuAside';

function MyLibrary() {
  return (
    <section className={ styles.container }>
      <MenuAside />
      <Header />
      <main>
        <h2>MyLibrary content</h2>
      </main>

    </section>
  );
}

export default MyLibrary;
