import styles from './MenuAside.module.css';
import MenuImage from '../images/logo.png';
import LogoutButton from './LogoutButton';
import ListItemsMenu from './ListItemsMenu';

function MenuAside() {
  return (
    <aside className={ styles.menuAside }>
      <div className={ styles.menuAsideTop }>
        <img src={ MenuImage } alt="imagem" className={ styles.menuImage } />

        <ListItemsMenu />
      </div>

      <LogoutButton />

    </aside>
  );
}

export default MenuAside;
