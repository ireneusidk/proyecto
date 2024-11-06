import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../api/AuthContext";
import './Menu.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect} from "react";
import '../../../src/index.css'
const Menu = () => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
);

useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark-mode", darkMode);
}, [darkMode]);

const toggleTheme = () => {
    setDarkMode(!darkMode);
};


  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    alert('Sesión cerrada'); 
  };

  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
        <li><Link to="/protegida">Sección protegida</Link></li>
        <li><button onClick={handleLogout} className="Button"><i className="fa fa-sign-out" aria-hidden="true"></i>Cerrar sesión</button></li>
        <button onClick={toggleTheme} className="Boton">
        {darkMode ? (
                    <i className="fas fa-sun"></i> // ícono de sol para modo claro
                ) : (
                    <i className="fas fa-moon"></i> // ícono de luna para modo oscuro
                )}
                {darkMode ? ' ' : ' '}
        </button>
      </ul>
    </nav>
  );
}

export default Menu;