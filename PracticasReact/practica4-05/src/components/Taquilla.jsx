import React from 'react';
import { formatearEuro } from '../libraries/funciones.js';

const Taquilla = ({totalRecaudado}) => {
  return (
    <>
    <button>Taquilla</button> <p>{formatearEuro(totalRecaudado)}</p>
    </>
  );
}

export default Taquilla;