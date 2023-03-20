/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Book.module.css';
import { saveBook } from '../services/book';

function Book({ title, author, image, infoLink }) {
  const handleAddToMyLib = async () => {
    const hasBeenRead = 0;
    const objBook = {
      title, image, hasBeenRead, author, infoLink,
    };
    const data = await saveBook(objBook);
    console.log(data);
  };

  return (
    <div className={ styles.bookArea }>
      <div className={ styles.container }>
        <img
          src={ image }
          alt="book-cover"
          className={ styles.image }
        />
        <div className={ styles.middle }>
          <Link to={ infoLink } target="_blank">
            Info
          </Link>
          <button onClick={ () => handleAddToMyLib() }>
            Adicionar
          </button>
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
