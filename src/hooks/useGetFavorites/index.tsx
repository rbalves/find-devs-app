import { useState } from "react";

import store from "../../store";

const getFavorites = () => {
  const {
    favorites: { favorites },
  } = store.getState();

  return favorites;
};

const useFavorites = () => {
  const [favorites, setFavorites] = useState(getFavorites());

  store.subscribe(() => {
    setFavorites(getFavorites());
  });

  return { favorites };
};

export default useFavorites;