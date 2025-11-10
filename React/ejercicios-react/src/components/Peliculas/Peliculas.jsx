import React from "react";
import "./Peliculas.css";

const Peliculas = (props) => {
  return (
    <div>
      <div class="parent">
        <div class="div1">
            <h1>{props.titulo}</h1>
        </div>
        <div class="div2">
            <h1>Portada</h1>
        </div>
        <div class="div3">
            <h1>{props.resumen}</h1>
        </div>
        <div class="div4">
            <h1>{props.elenco}</h1>
        </div>
      </div>
    </div>
  );
};

export default Peliculas;
