import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeBanner.module.css';
import { getRandomBook } from '../services/googleBooks';
import BookCover from '../images/book-cover.png';
import LoadingImg from '../images/loading.gif';

function HomeBanner() {
  const [randomBook, setRandomBook] = useState('');

  const setImage = (book) => {
    if (book.volumeInfo.imageLinks) {
      return book.volumeInfo.imageLinks.thumbnail;
    }
    return BookCover;
  };

  const setAuthor = (book) => {
    if (book.volumeInfo.authors) {
      return book.volumeInfo.authors[0];
    }
    return 'sem autor definido';
  };

  // pegar livro aleatório pra preencher o banner
  const requestRandomBook = async () => {
    const dataBook = await getRandomBook();
    setRandomBook(dataBook);
  };

  useEffect(() => {
    requestRandomBook();
  }, []);

  return (
    <div className={ styles.homeBannerArea }>
      {
        randomBook ? (
          <div className={ styles.homeBanner }>
            <div className={ styles.imgHomeArea }>
              <img
                className={ styles.imgHomeBanner }
                src={ setImage(randomBook) }
                alt="book-cover"
              />
            </div>
            <div className={ styles.infoHomeBanner }>
              <h4>{setAuthor(randomBook) }</h4>
              <h2>{ randomBook.volumeInfo.title }</h2>
              <Link
                className={ styles.btnAddHomeBanner }
                to={ randomBook.volumeInfo.infoLink }
                target="_blank"
              >
                Ver
              </Link>
              {/* <button className={ styles.btnAddHomeBanner }>Adicionar</button> */}
            </div>
          </div>
        ) : (
          <img
            className={ styles.imgHomeBanner }
            src={ LoadingImg }
            alt="book-cover"
          />
        )
      }
    </div>
  );
}

export default HomeBanner;
