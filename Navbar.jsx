import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { favorites } = useFavorites();

  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        🎮 GameZone
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/juegos">Juegos</NavLink>
        <NavLink to="/favoritos">
          Favoritos ({favorites.length})
        </NavLink>
        <NavLink to="/acerca">Acerca</NavLink>
      </nav>

      <button className="theme-button" onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
      </button>
    </header>
  );
}

export default Navbar;
