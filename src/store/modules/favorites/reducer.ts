import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  favorites: number[];
};

const initialState: initialStateProps = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [...new Set([...state.favorites, action.payload])];
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const getFavorites: (state: initialStateProps) => number[] = (state) =>
  state.favorites;

export default favoritesSlice.reducer;
