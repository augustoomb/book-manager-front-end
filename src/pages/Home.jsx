import { useState } from 'react';
import styles from './Home.module.css';
import Header from '../components/Header';
import MenuAside from '../components/MenuAside';
import HomeBanner from '../components/HomeBanner';
import Book from '../components/Book';
import searchGoogleBooksApi from '../services/googleBooks';

function Home() {
  const [dataFound, setDataFound] = useState('');

  const handleSearch = async (searchInputValue) => {
    const data = await searchGoogleBooksApi(searchInputValue);
    setDataFound(data.items);
  };

  return (
    <section className={ styles.container }>
      <MenuAside />
      <Header onClick={ handleSearch } />
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
            {
              dataFound.map((book, index) => (<Book
                key={ index }
                title={ book.volumeInfo.title || 'título indefinido' }
                author={ book.volumeInfo.authors || 'autor indefinido' }
              />))
            }
          </main>
        )
      }
    </section>
  );
}

export default Home;
