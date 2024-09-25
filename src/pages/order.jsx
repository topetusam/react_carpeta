import '../styles/order.css'; 
import React from 'react';

const order = () => {
    return (
        <div className="order-summary-container">
            {/* Header */}
            <div className="header">
                <span className="back-arrow">&#8592;</span>
                <span>Order Summary</span>
                <span className="more-options">&#8942;</span>
            </div>

            {/* Movie Info */}
            <div className="movie-info">
                <img 
                    src="https://example.com/image-url.jpg" // Reemplaza con la URL de la imagen
                    alt="Puss In Boots The Last Wish" 
                    className="movie-poster" 
                />
                <div className="movie-details">
                    <h2>Puss In Boots The Last Wish</h2>
                    <p className="genre">Adventure</p>
                    <p className="cinema-name">HARTONO MALL</p>
                    <p className="showtime">Sun, 12 Feb 2023. 13:00</p>
                </div>
            </div>

            {/* Order Info */}
            <div className="order-info">
                <p>ORDER NUMBER : <span>123456786</span></p>
                <p>1 TICKET <span>C5</span></p>
                <p>REGULAR SEAT <span>$24,99 x 3</span></p>
                <p>SERVICE FEE <span>$1,99 x 1</span></p>
            </div>

            {/* Payment Method */}
            <div className="payment-method">
                <p>Payment method</p>
                <div className="card-info">
                    <img 
                        src="https://example.com/mastercard-logo.jpg" // Reemplaza con la URL del logo de la tarjeta
                        alt="MasterCard" 
                        className="card-logo"
                    />
                    <div className="card-details">
                        <p>MasterCard</p>
                        <p>**** **** 0998 7865</p>
                    </div>
                    <div className="card-selector">&#9679;</div>
                </div>
            </div>

            {/* Payment Timer */}
            <div className="payment-timer">
                <p>Complete your payment in <span>04:59</span></p>
            </div>

            {/* Buy Button */}
            <button className="buy-ticket-button">Buy ticket</button>
        </div>
    );
};

export default order; // Asegúrate de tener esta línea