import React, { useState } from 'react';
import Discente from './Discente.jsx';
import matriculados from "../json/matriculados.json";

const ListadoDiscentes = () => {
    const [discentes, setDiscentes] = useState(matriculados.discentes);
  return (
    <>
        <div>
        <h2>Discentes:</h2>
        <div
          onClick={(evento) => {
            console.log(evento.target);
          }}
        >
          {discentes.length
            ? discentes.map((discente, index) => {
                return <Discente key={index} discente={discente} />;
              })
            : "No hay discentes"}
        </div>
      </div>
    </>
  )
}

export default ListadoDiscentes