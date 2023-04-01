import styles from './SpanBook.module.css';

function SpanBook(props) {
  // eslint-disable-next-line react/prop-types
  const { text } = props;

  return (
    <span className={ styles.text }>{ text }</span>
  );
}

export default SpanBook;
