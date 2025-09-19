import React from 'react';
import './Pelicula.css';

const Pelicula = ({titulo, direccion, cartela, children}) => {
  return (
    <div className='pelicula_alerta'>
      <img src={cartela} alt={`Cartela de ${titulo}`} className='cartela'/>
      <div className='texto'>
        <h2>{titulo}</h2>
        <h3>{direccion}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Pelicula;
