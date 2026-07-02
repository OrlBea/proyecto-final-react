import { useMemo, useState } from 'react';
import { useFavorites } from '../context/FavoritesContext.jsx';
import SearchBar from '../ComponenteF/SearchBar.jsx';
import GameList from '../ComponenteF/GameList.jsx'; 

function FavoritesPage() {
  const { favorites } = useFavorites();
  const [search, setSearch] = useState('');

  const filteredFavorites = useMemo(() => {
    return favorites.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [favorites, search]);

  return (
    <section className="page">
      <div className="page-header">
        <h1>Mis Favoritos</h1>
        <p>Estos videojuegos se guardan en localStorage.</p>
      </div>

      <SearchBar search={search} onSearchChange={setSearch} />
      <GameList games={filteredFavorites} />
    </section>
  );
}

export default FavoritesPage;
