import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import useDebounce from "../hooks/useDebounce.js";
import SearchBar from "../ComponenteF/SearchBar.jsx";
import GameList from "../ComponenteF/GameList.jsx";
import Loader from "../ComponenteF/Loader.jsx";
import ErrorMessage from "../ComponenteF/ErrorMessage.jsx";
import { gamesUrl } from "../utils/api.js";

function GamesPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data, loading, error } = useFetch(gamesUrl());

  const games = useMemo(() => {
    const list = data?.data || [];

    return list.filter((game) =>
      game.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [data, debouncedSearch]);

  return (
    <section className="page">
      <div className="page-header">
        <h1>Catálogo de Videojuegos</h1>
        <p>Videojuegos de The Legend of Zelda usando una API gratuita.</p>
      </div>

      <div className="filters-panel">
        <SearchBar search={search} onSearchChange={setSearch} />
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <GameList games={games} />}
    </section>
  );
}

export default GamesPage;