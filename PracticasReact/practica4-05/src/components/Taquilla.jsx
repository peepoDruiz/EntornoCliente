import React from "react";
import { formatearEuro } from "../libraries/funciones.js";

const Taquilla = ({ totalRecaudado }) => {
  return (
    <>
      <p>Total recaudado: {formatearEuro(totalRecaudado)}.</p>
    </>
  );
};

export default Taquilla;
