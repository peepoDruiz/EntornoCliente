import React from "react";
import Contenedor from "../components/Contenedor.jsx";

const Inicio = () => {
  return (
    <>
      <Contenedor titulo="Inicio" clase="inicio">
        <p>Esta es la colección de películas de Dani.</p>
        <img
          src="https://img.asmedia.epimg.net/resizer/v2/6J6HHGD4PJADDLAM4MIZZ3DU4Y.jpg?auth=16a43a0872c159bf8593eeed889061fa6c2d9abf89c62a4e390b69ee8f6711b0&width=1200&height=1200&smart=true"
          alt="imagen-de-radahn"
        />
      </Contenedor>
    </>
  );
};

export default Inicio;
