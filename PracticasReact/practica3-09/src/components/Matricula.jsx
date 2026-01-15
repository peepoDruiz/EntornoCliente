import React, { useState } from "react";
import matriculados from "../json/matriculados.json";
import Discente from "./Discente";

const Matricula = () => {
  const { discentes, setDiscentes } = useState("");
  const listadoMatriculados = matriculados.discentes;
  console.log(listadoMatriculados);
  return (
    <>
      <div>
        <button>Discentes 2ºDAW</button>
        <button>Discentes cursando 1º</button>
        <button>Discentes DAW</button>
        <button>Discentes lectores</button>
        <button>Ordenar listado</button>
        <button>Reiniciar listado</button>
        <button>Desmatricular</button>
      </div>
      <div>
        <h2>Discentes:</h2>
        {listadoMatriculados.length
          ? listadoMatriculados.map((discente, index) => {
              return <Discente key={index} discente={discente} />;
            })
          : "No hay discentes"}
      </div>
    </>
  );
};

export default Matricula;
