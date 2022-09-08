import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  categories: { id: number; name: string }[];
};

const initialState: initialStateProps = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = [...state.categories, ...action.payload];
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
