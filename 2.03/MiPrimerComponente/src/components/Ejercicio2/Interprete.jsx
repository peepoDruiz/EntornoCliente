import React from 'react'

const Interprete = ({foto, nombre, children}) => {
  return (
    <div className='interprete_alerta'>
      <img src={foto} alt={`Foto de ${nombre}`} className='foto'/>
      <h2>{nombre}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Interprete;
