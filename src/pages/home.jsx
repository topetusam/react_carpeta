import '../styles/home.css';  // Ajusta la ruta para salir de la carpeta "pages"
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="encabezado">
      <img src="../public/img/perfil.png"/>
      <h3>Hi, Ferrucio Tuccine!</h3>
      
      <h2>Let's watch movie together</h2>
        <img src="../public/img/campanita.png"/>
      </div>
      <div className="logo">
      </div>
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
