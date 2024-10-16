import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ConsultaCirculacion.css';

function ConsultaCirculacion() {
  const [consulta, setConsulta] = useState({
    placa: '',
    fecha: ''
  });
  const [resultado, setResultado] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/autos/circulacion`, {
        params: {
          placa: consulta.placa,
          fecha: consulta.fecha
        }
      });
      setResultado(response.data);
    } catch (error) {
      alert('Error al consultar la circulación: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="consulta-circulacion">
      <form className="formulario-consulta" onSubmit={handleSubmit}>
        <input
          className="input-text"
          name="placa"
          value={consulta.placa}
          onChange={handleChange}
          placeholder="Placa"
          required
        />
        <input
          className="input-text"
          name="fecha"
          type="datetime-local"
          value={consulta.fecha}
          onChange={handleChange}
          required
        />
        <button className={`boton-consulta ${isLoading ? 'loading' : ''}`} type="submit" disabled={isLoading}>
          {isLoading ? 'Consultando...' : 'Consultar'}
        </button>
        <Link to="/" className="boton-volver">Volver</Link>
      </form>
      {resultado && (
        <div className={`popup-resultado ${resultado.puedeCircular ? 'verde' : 'rojo'}`}>
          <h3>Resultado de la consulta:</h3>
          <p>{resultado.mensaje}</p>
          <p>Fecha de consulta: {new Date(resultado.fechaConsulta).toLocaleString()}</p>
          <p>Detalles del auto:</p>
          <ul>
            <li>Placa: {resultado.auto.placa}</li>
            <li>Color: {resultado.auto.color}</li>
            <li>Modelo: {resultado.auto.modelo}</li>
          </ul>
          <button className="boton-cerrar" onClick={() => setResultado(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default ConsultaCirculacion;