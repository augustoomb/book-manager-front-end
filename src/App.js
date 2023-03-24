/* eslint-disable react/no-multi-comp */
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import styles from './App.module.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';
import store from './redux/store';
import isAuthenticated from './auth';

function PrivateRoute() {
  if (isAuthenticated()) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}

function SkipLogin() {
  if (!isAuthenticated()) {
    return <Outlet />;
  }

  return <Navigate to="/home" />;
}

function App() {
  return (
    <Provider store={ store }>
      <main className={ styles.container }>
        <Routes>
          <Route path="/" element={ <SkipLogin /> }>
            <Route path="/" element={ <Login /> } />
          </Route>
          <Route path="/register" element={ <SkipLogin /> }>
            <Route path="/register" element={ <Register /> } />
          </Route>
          <Route path="/home" element={ <PrivateRoute /> }>
            <Route path="/home" element={ <Home /> } />
          </Route>
          <Route path="/library" element={ <PrivateRoute /> }>
            <Route path="/library" element={ <MyLibrary /> } />
          </Route>
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;
