import { useState } from 'react'
import './App.css'
import Contenedor from './components/Ejercicio1/Contenedor.jsx'
import Interprete from './components/Ejercicio2/Interprete.jsx';

function App() {

  return (
    <>
      <Contenedor>
        <h1>Good Will Hunting</h1>
        <Interprete foto="https://i.pinimg.com/474x/64/37/7d/64377d3546d8a881e2f4428f09b58a9e.jpg" nombre="Robin Williams"><p>Robin McLaurin Williams ​​fue un comediante, actor y actor de voz estadounidense. Ganador de un premio Óscar, cinco Globos de Oro, un premio del Sindicato de Actores, dos premios Emmy y tres premios Grammy.</p></Interprete>
      </Contenedor>
    </>
  );
};

export default App;
