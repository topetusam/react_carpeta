// CinemaSelection.js
import '../styles/cinema.css'; // Ruta del archivo CSS
import React from 'react';

const cinema = () => {
    return (
        <div className="container">
            {/* Header */}
            <div className="header">
                <span className="back-arrow">&#8592;</span>
                <span>Cinema Selection</span>
                <span className="more-options">&#8942;</span>
            </div>

            {/* Movie Image */}
            <div className="movie-image">
                <img src="../img/portadagatoconbotas.png" alt="Puss in Boots" />
            </div>

            {/* Movie Title and Trailer Button */}
            <div className="movie-info">
                <h1>Puss in Boots: The Last Wish</h1>
                <p>Action, Adventure</p>
                <button className="trailer-button">Watch Trailer</button>
            </div>

            {/* Movie Description */}
            <div className="movie-description">
                <p>
                    Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.
                </p>
            </div>

            {/* Cast Section */}
            <div className="cast-section">
                <h2>Cast</h2>
                <div className="cast-list">
                    <div className="cast-member">
                        <img src="../img/perfi1.png" alt="Antonio Banderas" />
                        <p>Antonio Banderas</p>
                        <span>Puss in Boots</span>
                    </div>
                    <div className="cast-member">
                        <img src="../img/perfil2.png" alt="Salma Hayek" />
                        <p>Salma Hayek</p>
                        <span>Kitty Softpaws</span>
                    </div>
                    <div className="cast-member">
                        <img src="../img/perfil3.png" alt="Harvey Guillén" />
                        <p>Harvey Guillén</p>
                        <span>Perro</span>
                    </div>
                </div>
            </div>

            {/* Cinema Section */}
            <div className="cinema-section">
                <h2>Cinema</h2>
                <div className="cinema-list">
                    <div className="cinema-option selected">
                        <div className="cinema-info">
                        <img src="../img/atrium.png" alt="Harvey Guillén" />
                            <h3>Atrium Cinemas</h3>
                            <p>Staff Lines, Saddar, Karachi</p>
                        </div>
                    </div>
                    <div className="cinema-option">
                        <div className="cinema-info">
                        <img src="../img/neuplex.png" alt="Harvey Guillén" />
                            <h3>Nueplex</h3>
                            <p>Khayaban - e Shaheen, Dha Phase 8</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Book Now Button */}
            <button className="book-now-button">Book Now</button>
        </div>
    );
};

export default cinema;
