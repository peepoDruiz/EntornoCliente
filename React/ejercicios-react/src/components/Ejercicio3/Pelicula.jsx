import React from 'react';
import './Pelicula.css';

const Pelicula = (props) => {
  return (
    <div className='pelicula_alerta'>
      <img src={props.cartela} alt={`Cartela de ${props.titulo}`} className='cartela'/>
      <div className='texto'>
        <h2>{props.titulo}</h2>
        <h3>{props.direccion}</h3>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Pelicula;
