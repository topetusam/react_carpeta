import '../styles/chooseSeat.css'; 
import React from 'react';


const chooseSeat = () => {
    return (
        <div className="container">
        {/* Header */}
        <div className="header">
            <span className="back-arrow">&#8592;</span>
            <span>Choose Seat</span>
            <span className="more-options">&#8942;</span>
        </div>

        {/* Screen */}
        <div className="screen-container">
            <div className="screen"></div>
            <p>Screen This Way</p>
        </div>

        {/* Seat Map */}
        <div className="seat-map">
            {['A', 'B', 'C', 'D', 'E', 'F'].map((row) => (
                <div key={row} className="seat-row">
                    <span>{row}</span>
                    {[...Array(8)].map((_, index) => {
                        const seatNumber = `${row}${index + 1}`;
                        return (
                            <div key={seatNumber} className="seat">
                                {seatNumber}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>

        {/* Seat Legend */}
        <div className="seat-legend">
            <div className="legend-item">
                <div className="seat available"></div>
                <span>Available</span>
            </div>
            <div className="legend-item">
                <div className="seat reserved"></div>
                <span>Reserved</span>
            </div>
            <div className="legend-item">
                <div className="seat selected"></div>
                <span>Selected</span>
            </div>
        </div>

        {/* Date and Time Selection */}
        <div className="date-time-selection">
            <div className="date-row">
                {[17, 18, 19, 20, 21].map((date) => (
                    <div key={date} className="date-item">
                        <span>Fri</span>
                        <span>{date}</span>
                    </div>
                ))}
            </div>
            <div className="time-row">
                {['13:00', '15:45', '18:50', '20:30'].map((time) => (
                    <div key={time} className="time-item">
                        <span>{time}</span>
                        <span className="price">$5.25 - 3D</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Price and Buy Button */}
        <div className="price-section">
            <div className="price">Price: $24.99</div>
            <button className="buy-ticket-button">Buy ticket</button>
        </div>
    </div>
);
};

export default chooseSeat;
