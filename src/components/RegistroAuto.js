import React, { useState } from 'react';
import axios from 'axios';
import './RegistroAuto.css';

function RegistroAuto() {
  const [auto, setAuto] = useState({
    placa: '',
    color: '',
    modelo: '',
    chasis: ''
  });

  const handleChange = (e) => {
    setAuto({ ...auto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/autos', auto);
      alert('Auto registrado con éxito');
      // Limpiar el formulario después de un registro exitoso
      setAuto({ placa: '', color: '', modelo: '', chasis: '' });
    } catch (error) {
      alert('Error al registrar el auto: ' + error.message);
    }
  };

  return (
    <form className="formulario-registro" onSubmit={handleSubmit}>
      <input
        className="input-text"
        name="placa"
        value={auto.placa}
        onChange={handleChange}
        placeholder="Placa"
        required
      />
      <input
        className="input-text"
        name="color"
        value={auto.color}
        onChange={handleChange}
        placeholder="Color"
        required
      />
      <input
        className="input-text"
        name="modelo"
        value={auto.modelo}
        onChange={handleChange}
        placeholder="Modelo"
        required
      />
      <input
        className="input-text"
        name="chasis"
        value={auto.chasis}
        onChange={handleChange}
        placeholder="Chasis"
        required
      />
      <button className="boton-registrar" type="submit">Registrar Auto</button>
    </form>
  );
}

export default RegistroAuto;
