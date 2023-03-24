import { useEffect, useState } from 'react';
import styles from './Home.module.css';
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
      {/* <Header /> */}
      <main>
        <h2>MyLibrary content</h2>
        {
          myBooks.length === 0 ? (
            <p>Não há livros salvos na sua biblioteca</p>
          ) : (
            <main className={ styles.mainHide }>
              <div className={ styles.bookCollection }>
                {
                  myBooks.map((book, index) => (<Book
                    key={ index }
                    id={ book.id }
                    title={ book.title }
                    author={ book.author_name }
                    image={ book.thumb || BookCover }
                    infoLink={ book.info_link }
                    inMyLib
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
