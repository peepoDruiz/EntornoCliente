import Contenedor from "./Contenedor.jsx";
import "./ContenedorInterprete.css";

const ContenedorInterprete = ({ interprete }) => {
  return (
    <>
      <div className="interprete">
        <Contenedor titulo={interprete.nombre}>
          <img src={interprete.imagen} alt={interprete.nombre} />
        </Contenedor>
      </div>
    </>
  );
};

export default ContenedorInterprete;
