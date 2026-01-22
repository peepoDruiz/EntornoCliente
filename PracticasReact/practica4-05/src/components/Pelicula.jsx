import React, { useRef } from "react";
import Taquilla from "./Taquilla.jsx";
import Elenco from "./Elenco.jsx";
import "../css/Pelicula.css";

const Pelicula = ({ titulo, cartelera, resumen }) => {
  const taquillaRef = useRef(null);
  const elencoRef = useRef(null);
  const recaudacion = 174000000;

  const mostrarContenido = (referencia) => {
    const div = referencia.current;
    if (div.style.display === "none") {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  };

  return (
    <>
      <div className="contenedorPelicula">
        <h1>{titulo}</h1>
        <div className="cartelera">
          <img src={cartelera} alt="Cartelera de la película" />
        </div>
        <div className="resumen">
          <h2>Resumen:</h2>
          {resumen}
        </div>
        <div className="taquilla">
          <button
            onClick={() => {
              mostrarContenido(taquillaRef);
            }}
          >
            Taquilla
          </button>
          <div className="recaudado" ref={taquillaRef} style={{display:'none'}}>
            <Taquilla totalRecaudado={recaudacion}></Taquilla>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              mostrarContenido(elencoRef);
            }}
          >
            Elenco
          </button>
          <div
            className="elenco"
            ref={elencoRef}
            style={{ display: "none" }}
          >
            <Elenco />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pelicula;
