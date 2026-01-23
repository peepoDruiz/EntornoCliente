import React from 'react';
import { useNavigate } from 'react-router-dom';

const Productos = () => {

    const navegar = useNavigate();

  return (
    <>
        <h1>Productos</h1>
        <input type="button" value="Volver a inicio" onClick={() => {
            navegar('/');
        }}/>
    </>
  )
}

export default Productos;
