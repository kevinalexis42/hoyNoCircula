import React, { useState } from 'react';
import axios from 'axios';
import './ConsultaCirculacion.css';  // Importamos los estilos

function ConsultaCirculacion() {
  const [consulta, setConsulta] = useState({
    placa: '',
    fecha: ''
  });
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <button className="boton-consulta" type="submit">Consultar</button>
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
