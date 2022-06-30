import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../data'

const initialState = {
  articles: [],
  loading: false,
  error: '',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles(state, action) {
      state.articles = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchData = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  });

export const { addArticles } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
