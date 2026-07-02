import { Link } from "react-router-dom";
import zeldaImage from "../assets/IMGZelda.jpg";

function HomePage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">🎮 FAN GAME ZELDA</span>

        <h1>Bienvenido a GameZone</h1>

        <img
          className="hero-image"
          src={zeldaImage}
          alt="Portada de The Legend of Zelda"
        />

        <p className="hero-description">
          <strong>GameZone</strong> es una aplicación web desarrollada con React
          que permite explorar información sobre los videojuegos de la saga
          <strong> The Legend of Zelda</strong>. Los usuarios pueden consultar
          detalles de cada título, buscar videojuegos, guardar sus favoritos y
          navegar de forma rápida e intuitiva mediante una interfaz moderna y
          responsiva.
        </p>

        <Link className="primary-button" to="/juegos">
          Explorar videojuegos
        </Link>
      </div>
    </section>
  );
}

export default HomePage;