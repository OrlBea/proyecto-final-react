


function SearchBar({ search, onSearchChange }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar videojuegos..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;