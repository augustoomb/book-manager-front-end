// import { validateToken } from './services/user';

const isAuthenticated = () => {
  const tokenLoginStorage = localStorage.getItem('tokenLogin');

  return !!tokenLoginStorage;
//   return tokenLoginStorage ? true : false;
};

export default isAuthenticated;
