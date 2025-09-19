import React from 'react'
import './Interprete.css';

const Interprete = ({foto, nombre, children}) => {
  return (
    <div className='interprete_alerta'>
      <img src={foto} alt={`Foto de ${nombre}`} className='foto'/>
      <div className='texto'>
        <h2>{nombre}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Interprete;
