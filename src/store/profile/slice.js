import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'gb',
  visible: true,
  isAuth: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfile: (state) => {
      state.visible = !state.visible;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { toggleProfile, changeName, changeAuth } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
