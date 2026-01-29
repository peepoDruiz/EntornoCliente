import React from "react";
import peliculas from "../json/peliculas.json";
import ContenedorPelicula from "../components/ContenedorPelicula.jsx";
import Contenedor from "../components/Contenedor.jsx";
import "../components/Peliculas.css";

const Peliculas = () => {
  const listadoPeliculas = peliculas.peliculas;
  console.log(listadoPeliculas);

  return (
    <>
      <Contenedor titulo="Listado de películas">
        <div className="peliculas">
          {listadoPeliculas.length
            ? listadoPeliculas.map((pelicula, index) => (
                <ContenedorPelicula key={index} pelicula={pelicula} />
              ))
            : "No hay películas"}
        </div>
      </Contenedor>
    </>
  );
};

export default Peliculas;
