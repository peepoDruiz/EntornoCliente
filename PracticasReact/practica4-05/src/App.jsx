import { useState } from "react";
import Pelicula from "./components/Pelicula.jsx";
import "./App.css";

function App() {
  const tituloPelicula = "The Grand Budapest Hotel";
  const carteleraPelicula =
    "https://m.media-amazon.com/images/M/MV5BNTQxYjE3YTAtMzcyYy00YjcyLTgxNWItM2YzYjBjMTY5ZTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";
  const resumenPelicula =
    "Gustave trabaja como conserje en el famoso gran hotel Budapest. Allí entabla amistad con Zero Moustafa, el nuevo empleado que se convierte en su protegido y a quien explica todos los secretos de la profesión. De repente, la rica Madame D. muere y deja en herencia a Gustave un preciado cuadro del Renacimiento. Sin embargo, los herederos de la rica mujer no están de acuerdo con el testamento y acusan a Gustave de asesinato. Entonces el conserje deberá escapar de la policía con la ayuda de Zero.";

  return (
    <>
      <Pelicula
        titulo={tituloPelicula}
        cartelera={carteleraPelicula}
        resumen={resumenPelicula}
      ></Pelicula>
      
    </>
  );
}

export default App;
