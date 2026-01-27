import Contenedor from "./Contenedor.jsx";
import "../css/ContenedorPelicula.css";

const ContenedorPelicula = ({ pelicula }) => {
  return (
    <>
      <div className="pelicula">
        <Contenedor titulo={pelicula.nombre}>
          <img src={pelicula.cartelera} alt={pelicula.nombre} />
        </Contenedor>
      </div>
    </>
  );
};

export default ContenedorPelicula;
