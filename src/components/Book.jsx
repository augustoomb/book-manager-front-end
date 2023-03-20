/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import styles from './Book.module.css';
// import BookCover from '../images/book-cover.png';
// import { addBook } from '../redux/slices/bookLib';

function Book({ title, author, image, infoLink }) {
  // const dispatch = useDispatch();

  const handleAddToMyLib = () => {
    // console.log('cliquei no add!!!');
    // dispatch(addBook({ id }));
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
