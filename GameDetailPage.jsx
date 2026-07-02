import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { gameDetailUrl } from "../utils/api.js";
import FavoriteButton from "../ComponenteF/FavoriteButton.jsx";
import Loader from "../ComponenteF/Loader.jsx";
import ErrorMessage from "../ComponenteF/ErrorMessage.jsx";

function GameDetailPage() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(gameDetailUrl(id));

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return null;

  const game = data.data;

  return (
    <section className="detail-page">
      <Link className="back-link" to="/juegos">
        ← Volver al catálogo
      </Link>

      <div className="detail-card">
        <img
          src="https://placehold.co/800x500?text=Zelda+Game"
          alt={game.name}
        />

        <div className="detail-content">
          <h1>{game.name}</h1>

          <p>
            <strong>Desarrollador:</strong>{" "}
            {game.developer || "No disponible"}
          </p>

          <p>
            <strong>Publicado por:</strong>{" "}
            {game.publisher || "No disponible"}
          </p>

          <p>
            <strong>Fecha de lanzamiento:</strong>{" "}
            {game.released_date || "Sin fecha"}
          </p>

          <FavoriteButton game={game} />
        </div>
      </div>

      <article className="description-box">
        <h2>Descripción</h2>
        <p>{game.description || "Este videojuego no tiene descripción."}</p>
      </article>
    </section>
  );
}

export default GameDetailPage;