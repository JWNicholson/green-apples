import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';

// This reducer manages the movies
export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});