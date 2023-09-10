import React from 'react';
import { FaCartShopping } from 'react-icons/fa6'; // Importa un icono de React Icons
import './CartWidget.css';

const Notificacion = () => {
  const numeroNotificaciones = 5; // Número hardcodeado (fijo) para la notificación

  return (
    <div className="notificacion-container">
      <FaCartShopping className="icono" />
      <span className="numero-notificaciones">{numeroNotificaciones}</span>
    </div>
  );
};

export default Notificacion;
