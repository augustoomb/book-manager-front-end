import styles from './Book.module.css';
import BookCover from '../images/book-cover.png';

function Book() {
  return (
    <div className={ styles.bookArea }>
      <img src={ BookCover } alt="book-cover" className={ styles.bookImg } />
      <div className={ styles.bookInfo }>
        <p className={ styles.bookInfoTitle }>Título</p>
        <p className={ styles.bookInfoAuthor }>Autor</p>
      </div>
    </div>
  );
}

export default Book;
