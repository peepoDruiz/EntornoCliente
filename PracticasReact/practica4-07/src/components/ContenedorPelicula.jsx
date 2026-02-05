import { useState } from "react";
import Contenedor from "./Contenedor.jsx";
import "./Contenedor.css";

const ContenedorPelicula = ({ pelicula }) => {

  const [detalles, setDetalles] = useState(false);

  const mostrarDetalles = () => {
    setDetalles(!detalles);
  };

  return (
    <>
      {detalles ? (
        <div className="pelicula" onClick={mostrarDetalles}>
          <Contenedor titulo={pelicula.nombre}>
            <img src={pelicula.cartelera} alt={pelicula.nombre} />
            <p>Director: {pelicula.director}</p>
            <p>Nota: {pelicula.nota}</p>
            <p>Recaudación: {pelicula.recaudacion}</p>
          </Contenedor>
        </div>
      ) : (
        <div className="pelicula" onClick={mostrarDetalles}>
          <Contenedor titulo={pelicula.nombre}>
            <img src={pelicula.cartelera} alt={pelicula.nombre} />
          </Contenedor>
        </div>
      )}
    </>
  );
};

export default ContenedorPelicula;
