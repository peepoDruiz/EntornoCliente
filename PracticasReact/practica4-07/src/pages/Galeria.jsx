import peliculas from "../json/peliculas.json";
import Contenedor from "../components/Contenedor.jsx";

const Galeria = () => {

  const listadoPeliculas = peliculas.peliculas;

  return (
    <>
      <Contenedor titulo="Galería de películas">
        <div className="galeria-peliculas">
          {listadoPeliculas.length
            ? listadoPeliculas.map((pelicula, index) => (
                <Contenedor clase="galeria" key={index}><img src={pelicula.cartelera} alt={pelicula.nombre} /></Contenedor>
              ))
            : "No hay películas"}
        </div>
      </Contenedor>
    </>
  )
}

export default Galeria
