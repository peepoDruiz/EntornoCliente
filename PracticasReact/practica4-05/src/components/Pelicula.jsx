import React, { useRef } from "react";
import Taquilla from "./Taquilla.jsx";
import Elenco from "./Elenco.jsx";
import "../css/Pelicula.css";

const Pelicula = ({ titulo, cartelera, resumen }) => {
  const contenedor1Ref = useRef(null);
  const recaudacion = 174000000;

  return (
    <>
      <div className="contenedorPelicula">
        <h1>{titulo}</h1>
        <div>
          <img src={cartelera} alt="Cartelera de la película" />
        </div>
        <div className="resumen">
          <h2>Resumen:</h2>
          {resumen}
        </div>

        <Taquilla totalRecaudado={recaudacion}></Taquilla>
        <Elenco/>
      </div>
    </>
  );
};

export default Pelicula;
