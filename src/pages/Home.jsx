import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Header from '../components/Header';
import MenuAside from '../components/MenuAside';
import HomeBanner from '../components/HomeBanner';
import Book from '../components/Book';
import { searchGoogleBooksApi } from '../services/googleBooks';
import BookCover from '../images/book-cover.png';
import { getAllBooksByUser } from '../services/book';
import TopMenu from '../components/TopMenu';

function Home() {
  const [dataFound, setDataFound] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [myBooks, setMyBooks] = useState([]);

  const limitRecentBooks = 3;

  useEffect(() => {
    if (searchInput === '') {
      setDataFound('');
    }
  }, [searchInput]);

  // filtrar os 3 livros mais recentes
  const requestMyRecentBooks = async () => {
    const dataBooks = await getAllBooksByUser();
    // eslint-disable-next-line no-confusing-arrow, no-magic-numbers
    dataBooks.sort((a, b) => (a.id < b.id) ? 1 : -1);
    setMyBooks(dataBooks.slice(0, limitRecentBooks));
  };

  useEffect(() => {
    requestMyRecentBooks();
  }, []);

  const handleSearch = async (searchInputValue) => {
    const data = await searchGoogleBooksApi(searchInputValue);
    // setDataFound(data.items);
    setDataFound(data);
  };

  const setImage = (book) => {
    if (book.volumeInfo.imageLinks) {
      return book.volumeInfo.imageLinks.smallThumbnail;
    }
    return BookCover;
  };

  const setAuthor = (book) => {
    if (book.volumeInfo.authors) {
      return book.volumeInfo.authors[0];
    }
    return 'autor indefinido';
  };

  return (
    <section className={ styles.container }>
      <TopMenu />
      <MenuAside />
      <Header
        onClick={ handleSearch }
        onKeyDown={ handleSearch }
        searchInput={ searchInput }
        setSearchInput={ setSearchInput }
      />
      {
        dataFound === '' ? (
          <main className={ styles.mainBase }>
            <HomeBanner />
            <div className={ styles.recentlyAddedList }>
              <h2>Adicionados recentemente à minha biblioteca</h2>
              <div className={ styles.bookCollection }>
                {
                  myBooks.length === 0 ? (
                    <p>Não há livros salvos na sua biblioteca</p>
                  ) : (
                    myBooks.map((book, index) => (<Book
                      key={ index }
                      id={ book.id }
                      title={ book.title }
                      author={ book.author_name }
                      image={ book.thumb || BookCover }
                      infoLink={ book.info_link }
                      hasBeenRead={ book.has_been_read }
                      inMyLib
                    />))
                  )
                }
              </div>
            </div>
          </main>
        ) : (
          <main className={ styles.mainHide }>
            <div className={ styles.bookCollection }>
              {
                dataFound.totalItems > 0 ? (
                  dataFound.items.map((book, index) => (<Book
                    key={ index }
                    title={ book.volumeInfo.title || 'título indefinido' }
                    author={ setAuthor(book) }
                    image={ setImage(book) }
                    infoLink={ book.volumeInfo.infoLink || 'sem informação' }
                    hasBeenRead={ 0 }
                    inMyLib={ false }
                  />))
                ) : (
                  <p>Não foram encontrados registros </p>
                )
              }
            </div>
          </main>
        )
      }
    </section>
  );
}

export default Home;
