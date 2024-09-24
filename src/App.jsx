import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cinema from './pages/cinema';
import ChooseSeat from './pages/chooseSeat';
import Order from './pages/order';
import Ticket from './pages/ticket';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/choose-seat" element={<ChooseSeat />} />
        <Route path="/order" element={<Order />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
