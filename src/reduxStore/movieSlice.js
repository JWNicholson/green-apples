import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const url = 'https://omdbapi.com/';
const apikey = '1234';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    results: [],
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    removeResult: (state, action) => {
      state.results.splice(action.payload, 1);
    },
  },
});

export const getMovies = (query) => (dispatch) => {
  // get movies matching the query.
  axios
    .get(url, {
      params: {
        apikey: apikey,
        s: query,
        type: 'movie',
      },
    })
    .then((response) => {
      // If Response is 'True' set Response stae
      if (response.data['Response'] === 'True') {
        dispatch(setResults(response.data['Search']));
      } else {
        alert(response.data['Error']);
      }
    })
    .catch((err) => {
      alert(err);
    });
};

// reducer actions
export const { setResults, removeResult } = moviesSlice.actions;
export const selectMovies = (state) => state.movies.results;

// Export the movies reducer
export default moviesSlice.reducer;
