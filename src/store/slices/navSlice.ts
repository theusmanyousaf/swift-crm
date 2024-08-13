import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  menuOpen: boolean;
  editOpen: boolean;
}

const initialState: MenuState = {
  menuOpen: false,
  editOpen: false
};

const menuSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    toggleUplaod: (state) => {
      state.editOpen = !state.editOpen;
    }
  }
});

export const { toggleNav, toggleUplaod } = menuSlice.actions;

export default menuSlice.reducer;
