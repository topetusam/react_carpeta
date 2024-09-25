import React from 'react';
import '../styles/ticket.css'; // Asegúrate de tener este archivo de estilos

const ticket = () => {
    return (
        
        
        <div className="ticket-container">
            <div className="ticket-header">
                <span className="back-arrow">&#8592;</span>
                <span>Ticket</span>
                <span className="more-options">&#8942;</span>
            </div>

            <div className="ticket-image">
                <img src="../img/portadagatoconbotas.png" alt="Puss In Boots The Last Wish" />
            </div>

            <div className="ticket-movie-title">
                <h1>Puss In Boots The Last Wish</h1>
                <p>Show this ticket at the entrance</p>
            </div>

            <div className="ticket-info">
                <div className="cinema-info">
                    <h2>Cinema</h2>
                    <div className="cinema-name">
                        <h3>HARTONO MALL 12</h3>
                        <img src="../img/atrium.png" alt="Atrium Logo" />
                    </div>
                </div>
                <div className="details">
                    <div className="detail">
                        <span>Date</span>
                        <span>Sun, Feb 12th 2023</span>
                    </div>
                    <div className="detail">
                        <span>Time</span>
                        <span>13:00</span>
                    </div>
                    <div className="detail">
                        <span>Cinema Hall #</span>
                        <span>Cinema A</span>
                    </div>
                    <div className="detail">
                        <span>Seat</span>
                        <span>C5</span>
                    </div>
                    <div className="detail">
                        <span>Cost</span>
                        <span>$26,99</span>
                    </div>
                    <div className="detail">
                        <span>Order ID</span>
                        <span>12345678</span>
                    </div>
                </div>
            </div>

            <div className="barcode">
                <img src="../img/codigodebarras.png" alt="Barcode" />
            </div>
        </div>
    );
};

export default ticket;
