import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  menuOpen: boolean;
}

const initialState: MenuState = {
  menuOpen: false
};

const menuSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.menuOpen = !state.menuOpen;
    }
  }
});

export const { toggleNav } = menuSlice.actions;

export default menuSlice.reducer;
