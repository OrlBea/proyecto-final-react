import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import GamesPage from './pages/GamesPage.jsx';
import GameDetailPage from './pages/GameDetailPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/juegos" element={<GamesPage />} />
          <Route path="/juegos/:id" element={<GameDetailPage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
          <Route path="/acerca" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
