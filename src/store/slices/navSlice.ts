import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  menuOpen: boolean;
  editOpen: boolean;
  formOpen: boolean;
}

const initialState: MenuState = {
  menuOpen: false,
  editOpen: false,
  formOpen: false,
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
    },
    toggleForm: (state) => {
      state.formOpen = !state.formOpen;
    }
  }
});

export const { toggleNav, toggleUplaod, toggleForm } = menuSlice.actions;

export default menuSlice.reducer;
