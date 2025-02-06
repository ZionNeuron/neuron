import React from 'react';

const Main = () => {
  return (
    <main className="container my-5">
      <section id="inicio" className="mb-4">
        <h2>Bienvenido</h2>
        <p>Descubre nuestras soluciones personalizadas para tu negocio.</p>
      </section>
      <section id="servicios" className="mb-4">
        <h2>Servicios</h2>
        <ul>
          <li>Desarrollo Web</li>
          <li>Consultoría en Tecnología</li>
          <li>Optimización de Procesos</li>
        </ul>
      </section>
      <section id="contacto">
        <h2>Contacto</h2>
        <p>¿Interesado en trabajar con nosotros? ¡Contáctanos!</p>
        <button className="btn btn-primary">Enviar Mensaje</button>
      </section>
    </main>
  );
};

export default Main;
