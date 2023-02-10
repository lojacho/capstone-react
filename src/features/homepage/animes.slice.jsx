import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ANIME_URL = 'https://api.jikan.moe/v4/top/anime';
// Actions
const FETCH_ANIME = 'homepage/FETCH_ANIME';

// Action creators
export const fetchAnime = createAsyncThunk(FETCH_ANIME, async () => {
  const response = await axios.get(ANIME_URL);
  const anime = response.data;
  return anime;
});

// Reducer
const animeSlice = createSlice({
  name: 'topAnime',
  initialState: {
    topAnime: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAnime.pending]: (state) => {
      const newState = { ...state, loading: 'loading' };
      return newState;
    },
    [fetchAnime.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        loading: 'succeeded',
        topAnime: action.payload,
      };
      return newState;
    },
    [fetchAnime.rejected]: (state, action) => {
      const newState = {
        ...state,
        loading: 'failed',
        error: action.error.message,
      };
      return newState;
    },
  },
});

export default animeSlice.reducer;
