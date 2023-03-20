import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
// import bookLib from './slices/bookLib';

const store = configureStore({
  reducer: {
    user,
    // bookLib,
  },
});

export default store;
