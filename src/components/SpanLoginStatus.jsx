import styles from './SpanLoginStatus.module.css';

function SpanLoginStatus(props) {
  // eslint-disable-next-line react/prop-types
  const { text } = props;

  return (
    <span className={ styles.text }>{ text }</span>
  );
}

export default SpanLoginStatus;
