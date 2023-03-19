import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Header from '../components/Header';
import MenuAside from '../components/MenuAside';
import HomeBanner from '../components/HomeBanner';
import Book from '../components/Book';
import searchGoogleBooksApi from '../services/googleBooks';
import BookCover from '../images/book-cover.png';

function Home() {
  const [dataFound, setDataFound] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (searchInput === '') {
      setDataFound('');
    }
  }, [searchInput]);

  const handleSearch = async (searchInputValue) => {
    const data = await searchGoogleBooksApi(searchInputValue);
    setDataFound(data.items);
  };

  const setImage = (book) => {
    if (book.volumeInfo.imageLinks) {
      return book.volumeInfo.imageLinks.smallThumbnail;
    }
    return BookCover;
  };

  return (
    <section className={ styles.container }>
      <MenuAside />
      <Header
        onClick={ handleSearch }
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
                <Book />
                <Book />
                <Book />
              </div>
            </div>
          </main>
        ) : (
          <main className={ styles.mainHide }>
            <div className={ styles.bookCollection }>
              {
                dataFound.map((book, index) => (<Book
                  key={ index }
                  title={ book.volumeInfo.title || 'título indefinido' }
                  author={ book.volumeInfo.authors || 'autor indefinido' }
                  image={ setImage(book) }
                  infoLink={ book.volumeInfo.infoLink }
                />))
              }
            </div>
          </main>
        )
      }
    </section>
  );
}

export default Home;
