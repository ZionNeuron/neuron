import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
