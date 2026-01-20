import React, { useState } from "react";
import Discente from "./Discente.jsx";
import { borrarElemento } from "../libraries/funciones.js";

const ListadoDiscentes = ({ lista }) => {
  return (
    <>
      <div>
        <h2>Discentes:</h2>
        
          {lista.length
            ? lista.map((discente, index) => {
                return <Discente key={index} discente={discente} />;
              })
            : "No hay discentes"}
        </div>
    </>
  );
};

export default ListadoDiscentes;
