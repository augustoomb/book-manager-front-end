import styles from './Header.module.css';

function Header() {
  return (
    <header className={ styles.header }>
      <input placeholder="Busca" />
    </header>
  );
}

export default Header;
