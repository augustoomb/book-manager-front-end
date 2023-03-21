import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Header from '../components/Header';
import MenuAside from '../components/MenuAside';
import { getAllBooksByUser } from '../services/book';
import Book from '../components/Book';
import BookCover from '../images/book-cover.png';

function MyLibrary() {
  const [myBooks, setMyBooks] = useState([]);

  const requestMyBooks = async () => {
    const dataBooks = await getAllBooksByUser();
    setMyBooks(dataBooks);
  };

  useEffect(() => {
    requestMyBooks();
  }, []);

  return (
    <section className={ styles.container }>
      <MenuAside />
      <Header />
      <main>
        <h2>MyLibrary content</h2>
        {
          myBooks === '' ? (
            <h3>Não há livros salvos na sua biblioteca</h3>
          ) : (
            <main>
              <div>
                {
                  myBooks.map((book, index) => (<Book
                    key={ index }
                    title={ book.title }
                    author={ book.authorName }
                    image={ book.thumb || BookCover }
                    infoLink={ book.infoLink }
                  />))
                }
              </div>
            </main>
          )
        }
      </main>

    </section>
  );
}

export default MyLibrary;
