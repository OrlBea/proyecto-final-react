import { createContext, useCallback, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage('gamezone-favorites', []);

  const addFavorite = useCallback((game) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some((item) => item.id === game.id);
      if (exists) return currentFavorites;
      return [...currentFavorites, game];
    });
  }, [setFavorites]);

  const removeFavorite = useCallback((id) => {
    setFavorites((currentFavorites) => currentFavorites.filter((game) => game.id !== id));
  }, [setFavorites]);

  const isFavorite = useCallback((id) => {
    return favorites.some((game) => game.id === id);
  }, [favorites]);

  const toggleFavorite = useCallback((game) => {
    if (isFavorite(game.id)) {
      removeFavorite(game.id);
    } else {
      addFavorite(game);
    }
  }, [addFavorite, removeFavorite, isFavorite]);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
