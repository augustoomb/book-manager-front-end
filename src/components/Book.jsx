/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Book.module.css';
import { saveBook } from '../services/book';
import checkStringIsLink from '../utils/checkStringIsLink';

function Book({ title, author, image, infoLink }) {
  const handleAddToMyLib = async () => {
    const sendImg = checkStringIsLink(image) ? image : '';
    const hasBeenRead = 0;
    const objBook = {
      title, sendImg, hasBeenRead, author, infoLink,
    };
    const data = await saveBook(objBook);
    if (data.id) {
      console.log('salvou legal!');
    } else {
      console.log('deu ruim!!');
    }
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
