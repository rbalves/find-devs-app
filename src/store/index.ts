import { configureStore } from "@reduxjs/toolkit";

import { categories, favorites, stacks } from "./modules";

const store = configureStore({
  reducer: {
    categories,
    favorites,
    stacks,
  },
});

export default store;
