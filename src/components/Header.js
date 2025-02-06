import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 text-center">
      <h1>Mi Landing Page</h1>
      <nav>
        <a href="#inicio" className="text-white mx-2">Inicio</a>
        <a href="#servicios" className="text-white mx-2">Servicios</a>
        <a href="#contacto" className="text-white mx-2">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
