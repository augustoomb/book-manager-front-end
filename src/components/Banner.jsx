import styles from './Banner.module.css';

function Banner(props) {
  // eslint-disable-next-line react/prop-types
  const { image, alt } = props;

  return (
    <img src={ image } alt={ alt } className={ styles.image } />
  );
}

export default Banner;
