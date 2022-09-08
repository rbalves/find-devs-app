import { createSlice } from "@reduxjs/toolkit";

type Category = { id: number; name: string };

type initialStateProps = {
  categories: Category[];
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

export const getCategories: (state: initialStateProps) => Category[] = (
  state
) => state.categories;

export default categoriesSlice.reducer;
