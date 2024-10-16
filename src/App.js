import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegistroAuto from './components/RegistroAuto';
import ConsultaCirculacion from './components/ConsultaCirculacion';
import './App.css';  

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/registro" className="navbar-link">Registro de Auto</Link>
            </li>
            <li className="navbar-item">
              <Link to="/consulta" className="navbar-link">Consulta de Circulación</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/registro" element={<RegistroAuto />} />
            <Route path="/consulta" element={<ConsultaCirculacion />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
