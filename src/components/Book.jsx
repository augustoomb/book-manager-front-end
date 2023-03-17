/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import styles from './Book.module.css';
// import BookCover from '../images/book-cover.png';

function Book({ title, author, image }) {
  return (
    <div className={ styles.bookArea }>
      <div className={ styles.container }>
        <img
          src={ image }
          alt="book-cover"
          className={ styles.image }
        />
        <div className={ styles.middle }>
          <div className={ styles.text }>John Doe</div>
        </div>
      </div>
      <div className={ styles.bookInfo }>
        <p className={ styles.bookInfoTitle }>{title}</p>
        <p className={ styles.bookInfoAuthor }>{author}</p>
      </div>
    </div>
  );
}

export default Book;
