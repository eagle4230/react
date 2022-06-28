import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'gb',
  visible: true,
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
  },
});

export const { toggleProfile, changeName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
