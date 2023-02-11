import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import topAnimeReducer from '../features/homepage/animes.slice';

const store = configureStore({
  reducer: {
    topAnime: topAnimeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
