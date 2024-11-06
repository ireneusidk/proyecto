import React, { useState } from 'react';
import api from './api';
import './Register.css'
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', { username, password });
      alert('Usuario registrado con éxito');
    } catch (error) {
      alert('Error al registrar: ' + error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='register'>Registro</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input className='pass'
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className='Button1'>Registrar</button>
    </form>
  );
};

export default Register;