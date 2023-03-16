/* eslint-disable react/prop-types */
import styles from './Book.module.css';
import BookCover from '../images/book-cover.png';

function Book({ title, author }) {
  return (
    <div className={ styles.bookArea }>
      <img src={ BookCover } alt="book-cover" className={ styles.bookImg } />
      <div className={ styles.bookInfo }>
        <p className={ styles.bookInfoTitle }>{title}</p>
        <p className={ styles.bookInfoAuthor }>{author}</p>
      </div>
    </div>
  );
}

export default Book;
