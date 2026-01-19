import React, { useState } from "react";
import matriculados from "../json/matriculados.json";
import Discente from "./Discente";

const Matricula = () => {
  const [discentes, setDiscentes] = useState(matriculados.discentes);

  const filtrarSegundoDAW = () => {
    const filtrados = matriculados.discentes.filter(discente =>
      discente.curso.includes("2DAW")
    );
    setDiscentes(filtrados);
  };

  const filtrarPrimero = () => {
    const filtrados = matriculados.discentes.filter(discente =>
      discente.curso.includes("1")
    );
    setDiscentes(filtrados);
  };

  const filtrarDAW = () => {
    const filtrados = matriculados.discentes.filter(discente =>
      discente.curso.includes("DAW")
    );
    setDiscentes(filtrados);
  };

  const filtrarLectores = () => {
    const filtrados = matriculados.discentes.filter(discente =>
      discente.aficiones.includes("lectura")
    );
    setDiscentes(filtrados);
  };

  const ordenarListado = () => {
    //Ordena el listado actual por apellidos

    //Código de la IA (no lo entiendo)
    const ordenados = [...discentes];
    ordenados.sort((a, b) => {
      const apellidoA = a.apellidos;
      const apellidoB = b.apellidos;

      return apellidoA.localeCompare(apellidoB);
    });
    setDiscentes(ordenados);
  };

  const reiniciarListado = () => {
    setDiscentes(matriculados.discentes);
  };

  const desmatricular = () => {
    //Desmatricula un discente
  };


  return (
    <>
      <div>
        <button onClick={filtrarSegundoDAW}>Discentes 2ºDAW</button>
        <button onClick={filtrarPrimero}>Discentes cursando 1º</button>
        <button onClick={filtrarDAW}>Discentes DAW</button>
        <button onClick={filtrarLectores}>Discentes lectores</button>
        <button onClick={ordenarListado}>Ordenar listado</button>
        <button onClick={reiniciarListado}>Reiniciar listado</button>
        <button>Desmatricular</button>
      </div>
      <div>
        <h2>Discentes:</h2>
        {discentes.length
          ? discentes.map((discente, index) => {
              return <Discente key={index} discente={discente} />;
            })
          : "No hay discentes"}
      </div>
    </>
  );
};

export default Matricula;
