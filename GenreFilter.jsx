function GenreFilter({ genres, selectedGenre, onGenreChange }) {
  return (
    <select
      className="genre-filter"
      value={selectedGenre}
      onChange={(event) => onGenreChange(event.target.value)}
    >
      <option value="">Todos los géneros</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.slug}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}

export default GenreFilter;
