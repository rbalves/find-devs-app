import { configureStore } from "@reduxjs/toolkit";

import { categories, favorites } from "./modules";

const store = configureStore({
  reducer: {
    categories,
    favorites,
  },
});

export default store;
