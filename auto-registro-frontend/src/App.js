import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';
import { FaCar, FaSearch, FaHome } from 'react-icons/fa';
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
              <Link to="/" className="navbar-link">
                <FaHome className="nav-icon" /> Inicio
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/registro" className="navbar-link">
                <FaCar className="nav-icon" /> Registro de Auto
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/consulta" className="navbar-link">
                <FaSearch className="nav-icon" /> Consulta de Circulación
              </Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<RegistroAuto />} />
            <Route path="/consulta" element={<ConsultaCirculacion />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();

  const handleRegistroClick = () => {
    navigate('/registro');
  };

  const handleConsultaClick = () => {
    navigate('/consulta');
  };

  return (
    <div className="home">
      <h1>Bienvenido al Sistema de Gestión Vehicular</h1>
      <div className="features">
        <div className="feature" onClick={handleRegistroClick}>
          <FaCar className="feature-icon" />
          <h2>Registro de Autos</h2>
          <p>Registra nuevos vehículos en el sistema de manera rápida y sencilla.</p>
        </div>
        <div className="feature" onClick={handleConsultaClick}>
          <FaSearch className="feature-icon" />
          <h2>Consulta de Circulación</h2>
          <p>Verifica si un vehículo puede circular en una fecha específica.</p>
        </div>
      </div>
    </div>
  );
}

export default App;