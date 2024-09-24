import '../styles/home.css';  // Ruta del archivo CSS
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="user-info">
          <img src="../img/perfil.png" alt="Profile" className="profile-pic" />
          <div className="user-text">
            <h3>Hi, Ferrucio Tuccine!</h3>
            <h2>Let's watch movie together!</h2>
          </div>
          <button className="notification-btn">
            <img src="../img/campanita.png" alt="Notification" />
          </button>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search movie, cinema, genre..." />
        </div>
      </div>

      <div className="now-playing-section">
        <div className="section-header">
          <p>Now playing</p>
          <a href="#">See all</a>
        </div>
        <div className="movie-slider">
          <div className="movie-card">
            <img src="../img/gatoconbotas.png" alt="Movie 1" />
            <p>Puss In Boots</p>
            <p>Adventure</p>
          </div>
          <div className="movie-card">
            <img src="../img/avatar.png" alt="Movie 2" />
            <p>Avatar 2</p>
            <p>Sci-Fi</p>
          </div>
          <div className="movie-card">
            <img src="../img/rapidoyfurioso.png" alt="Movie 3" />
            <p>Fast and Furious</p>
            <p>Action</p>
          </div>
          <div className="movie-card">
            <img src="../img/movie4.png" alt="Movie 4" />
            <p>Black Panther</p>
            <p>Action</p>
          </div>
        </div>
      </div>

      <div className="coming-soon-section">
        <div className="section-header">
          <p>Coming soon</p>
          <a href="#">See all</a>
        </div>
        <div className="movie-slider">
          <div className="movie-card">
            <img src="../img/madmax.png" alt="Coming Soon 1" />
            <p>Furious 10</p>
            <p>Action</p>
          </div>
          <div className="movie-card">
            <img src="../img/jurassic.png" alt="Coming Soon 2" />
            <p>Guardians of the Galaxy</p>
            <p>Action</p>
          </div>
        </div>
      </div>

      <div className="bottom-nav">
        <a href="#" className="nav-item active">
          <img src="../img/casa.png" alt="Home" />
          <p>Home</p>
        </a>
        <a href="#" className="nav-item">
          <img src="../img/buscador.png" alt="Browse" />
          <p>Browse</p>
        </a>
        <a href="#" className="nav-item">
          <img src="../img/ricket.png" alt="Tickets" />
          <p>Tickets</p>
        </a>
        <a href="#" className="nav-item">
          <img src="../img/usuario.png" alt="Profile" />
          <p>Profile</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
