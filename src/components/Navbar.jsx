import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar is-primary is-fixed-top">
      <div className="navbar-brand">
        {/* Logo o título */}
        <Link to="/" className="navbar-item has-text-white">
          <h1 className="title is-4">Mi Tienda</h1>
        </Link>

        {/* Menú hamburguesa en móviles */}
        <div className="navbar-burger burger" data-target="navbarBasicExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Inicio</Link>
          <Link to="/registro" className="navbar-item">Registro</Link>
          <Link to="/login" className="navbar-item">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
