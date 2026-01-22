import React from "react";
import "../css/Interprete.css";

const Interprete = ({actor, personaje, foto}) => {
  return (
    <>
      <div className="tarjetaActor">
        <img src={foto} alt="nombre-actor" />
        <h3>{actor}</h3>
        <p>{personaje}</p>
      </div>
    </>
  );
};

export default Interprete;
