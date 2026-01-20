import React, { useState } from "react";
import matriculados from "../json/matriculados.json";
import ListadoDiscentes from "./ListadoDiscentes.jsx";
import { filtrar, ordenarLista } from "../libraries/funciones.js";

const Matricula = () => {
  const [discentes, setDiscentes] = useState(matriculados.discentes);

  const reiniciarListado = () => {
    setDiscentes(matriculados.discentes);
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            setDiscentes(filtrar(matriculados.discentes, "2DAW", "curso"));
          }}
        >
          Discentes 2ºDAW
        </button>
        <button
          onClick={() => {
            setDiscentes(filtrar(matriculados.discentes, "1", "curso"));
          }}
        >
          Discentes cursando 1º
        </button>
        <button
          onClick={() => {
            setDiscentes(filtrar(matriculados.discentes, "DAW", "curso"));
          }}
        >
          Discentes DAW
        </button>
        <button
          onClick={() => {
            setDiscentes(
              filtrar(matriculados.discentes, "lectura", "aficiones"),
            );
          }}
        >
          Discentes lectores
        </button>
        <button onClick={() => {
          setDiscentes(ordenarLista(discentes, "apellidos"))
        }}>Ordenar listado</button>
        <button onClick={reiniciarListado}>Reiniciar listado</button>
      </div>

      <ListadoDiscentes lista={discentes}/>
      
    </>
  );
};

export default Matricula;
