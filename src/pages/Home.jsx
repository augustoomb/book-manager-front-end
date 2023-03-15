import styles from './Home.module.css';
import Header from '../components/Header';
import MenuAside from '../components/MenuAside';
import HomeBanner from '../components/HomeBanner';
import Book from '../components/Book';
import searchGoogleBooksApi from '../services/googleBooks';

function Home() {
  const handleSearch = async (searchInputValue) => {
    const data = await searchGoogleBooksApi(searchInputValue);
    console.log(data);
  };

  return (
    <section className={ styles.container }>
      <MenuAside />
      <Header onClick={ handleSearch } />
      <main className={ styles.main }>
        <HomeBanner />
        <div className={ styles.recentlyAddedList }>
          <h2>Adicionados recentemente à minha biblioteca</h2>
          <div className={ styles.bookCollection }>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Home;
