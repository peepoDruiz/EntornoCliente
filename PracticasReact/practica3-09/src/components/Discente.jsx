import React from "react";

const Discente = ({ discente }) => {
  return (
    <>
      <p>
        <strong>Nombre:</strong> {discente.nombre} | <strong>Apellidos:</strong>{" "}
        {discente.apellidos} | <strong>Curso:</strong> {discente.curso} |{" "}
        <strong>Aficiones:</strong> {discente.aficiones.join(" - ")}{" "}
        <button id={discente.id} className="desmatriculador">
          Desmatricular
        </button>
      </p>
    </>
  );
};

export default Discente;
