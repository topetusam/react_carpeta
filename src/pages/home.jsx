import '../styles/home.css';  // Ajusta la ruta para salir de la carpeta "pages"
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Películas en Cartelera</h1>
      <ul className="movie-list">
        {/* Aquí puedes mapear las películas */}
        <li className="movie-item">
          <h2 className="movie-title">Película 1</h2>
          <p className="movie-info">Género: Acción | Duración: 120 min</p>
        </li>
        <li className="movie-item">
          <h2 className="movie-title">Película 2</h2>
          <p className="movie-info">Género: Drama | Duración: 110 min</p>
        </li>
        {/* Más películas */}
      </ul>
    </div>
  );
};

export default Home;
