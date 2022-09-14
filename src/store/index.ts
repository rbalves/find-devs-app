import { configureStore } from "@reduxjs/toolkit";

import { categories, favorites, stacks, developers, states } from "./modules";

const store = configureStore({
  reducer: {
    categories,
    favorites,
    stacks,
    developers,
    states,
  },
});

export default store;
