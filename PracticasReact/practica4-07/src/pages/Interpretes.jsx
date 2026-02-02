import Contenedor from '../components/Contenedor.jsx';
import "../components/Contenedor.css";
import peliculas from "../json/peliculas.json";
import ContenedorInterprete from '../components/ContenedorInterprete.jsx';

const Interpretes = () => {

  const listadoInterpretes = peliculas.peliculas;

  let interpretes = [];

  listadoInterpretes.forEach(pelicula => {
    interpretes = [...interpretes, ...pelicula.actores]
  });
  
  
  return (
    <>
      <Contenedor titulo="Listado de interpretes">
        <div className="interpretes">
          {interpretes.length
            ? interpretes.map((interprete, index) => (
                <ContenedorInterprete key={index} interprete={interprete} />
                
              ))
            : "No hay interpretes"}
        </div>
      </Contenedor>
    </>
  );
}

export default Interpretes;
