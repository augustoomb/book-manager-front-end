import styles from './HomeBanner.module.css';

function HomeBanner() {
  return (
    <div className={ styles.homeBannerArea }>
      <div className={ styles.homeBanner }>
        <div className={ styles.imgHomeBanner }>Imagem</div>
        <div className={ styles.infoHomeBanner }>
          <h4>Dan Brown</h4>
          <h2>O Código da Vinci</h2>
          <button className={ styles.btnAddHomeBanner }>Adicionar</button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
