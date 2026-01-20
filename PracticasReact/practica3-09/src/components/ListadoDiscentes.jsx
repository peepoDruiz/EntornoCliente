import React, { useState } from 'react';
import Discente from './Discente.jsx';

const ListadoDiscentes = ({lista}) => {
  return (
    <>
        <div>
        <h2>Discentes:</h2>
        <div
          onClick={(evento) => {
            console.log(evento.target);
          }}
        >
          {lista.length
            ? lista.map((discente, index) => {
                return <Discente key={index} discente={discente} />;
              })
            : "No hay discentes"}
        </div>
      </div>
    </>
  )
}

export default ListadoDiscentes