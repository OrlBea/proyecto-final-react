import GameCard from "./GameCard.jsx";

function GameList({ games }) {
  if (games.length === 0) {
    return <p className="empty-message">No se encontraron videojuegos.</p>;
  }

  return (
    <section className="game-grid">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
}

export default GameList;
