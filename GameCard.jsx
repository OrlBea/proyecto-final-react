import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton.jsx";
import { formatDate, formatRating } from "../utils/format.js";

function GameCard({ game }) {
  return (
    <article className="game-card">
      <img
        src={game.background_image || "https://placehold.co/600x400?text=GameZone"}
        alt={game.name}
      />

      <div className="game-card-content">
        <h3>{game.name}</h3>

        <p>
          <strong>Lanzamiento:</strong> {formatDate(game.released)}
        </p>

        <p>
          <strong>Rating:</strong> {formatRating(game.rating)}
        </p>

        <div className="card-actions">
          <Link className="details-link" to={`/juegos/${game.id}`}>
            Ver detalles
          </Link>

          <FavoriteButton game={game} />
        </div>
      </div>
    </article>
  );
}

export default GameCard;
