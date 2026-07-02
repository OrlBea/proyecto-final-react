import { useFavorites } from "../context/FavoritesContext.jsx";

function FavoriteButton({ game }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(game.id);

  return (
    <button className="favorite-button" onClick={() => toggleFavorite(game)}>
      {favorite ? "❤️ Quitar favorito" : "🤍 Agregar favorito"}
    </button>
  );
}

export default FavoriteButton;
