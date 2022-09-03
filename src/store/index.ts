import { configureStore } from '@reduxjs/toolkit';

import favorites from './modules/favorites/reducer';

const store = configureStore({
  reducer: {
    favorites,
  },
});

export default store;