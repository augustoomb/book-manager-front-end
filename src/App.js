// import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import styles from './App.module.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';
import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <main className={ styles.container }>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/library" element={ <MyLibrary /> } />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;
