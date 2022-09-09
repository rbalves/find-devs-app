import { configureStore } from "@reduxjs/toolkit";

import { categories, favorites, stacks, developers } from "./modules";

const store = configureStore({
  reducer: {
    categories,
    favorites,
    stacks,
    developers,
  },
});

export default store;
