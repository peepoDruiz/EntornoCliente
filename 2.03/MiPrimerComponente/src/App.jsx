import { useState } from 'react'
import './App.css'
import Contenedor from './components/Ejercicio1/Contenedor.jsx'
import Interprete from './components/Ejercicio2/Interprete.jsx';
import Pelicula from './components/Ejercicio3/Pelicula.jsx';

function App() {

  return (
    <>
      <Contenedor>
        <h1>Good Will Hunting</h1>
        <Interprete foto="https://i.pinimg.com/474x/64/37/7d/64377d3546d8a881e2f4428f09b58a9e.jpg" nombre="Robin Williams">
        Robin McLaurin Williams fue un comediante, actor y actor de voz estadounidense. Ganador de un premio Óscar,
        cinco Globos de Oro, un premio del Sindicato de Actores, dos premios Emmy y tres premios Grammy.
        </Interprete>
        <Pelicula titulo="Good Will Hunting" cartela="https://pics.filmaffinity.com/good_will_hunting-764690099-large.jpg"
        direccion="Gus Van Sant, Ben Affleck and Matt Damon">
          "Good Will Hunting" es un drama sobre Will Hunting (Matt Damon), un joven con un pasado traumático
          que esconde una inteligencia extraordinaria, especialmente en matemáticas, detrás de su personalidad
          rebelde y su trabajo como conserje en el MIT. Tras evitar la cárcel gracias a un profesor, Will debe
          recibir terapia y es allí donde un terapeuta paciente y empático (Robin Williams) logra conectar con él,
          ayudándole a confrontar su pasado y a decidir si usar su talento o seguir con su vida de siempre.
        </Pelicula>
        <Interprete foto="https://i.insider.com/6437017de955f50018fa9f8e?width=800&format=jpeg&auto=webp" nombre="Matt Damon">
        Matt Damon es un actor, guionista y filántropo estadounidense nacido el 8 de octubre de 1970 en Cambridge,
        Massachusetts. Saltó a la fama tras escribir y protagonizar El indomable Will Hunting (1997) junto a Ben Affleck,
        película que les valió el Oscar al Mejor Guion Original.
        </Interprete>
        <Interprete foto="https://i.insider.com/6436ff8be955f50018fa9e55?width=600&format=jpeg&auto=webp" nombre="Ben Affleck">
        Ben Affleck es un actor, director y productor estadounidense nacido en Berkeley, California, el 15 de agosto de 1972.
        Comenzó su carrera como actor infantil y ganó reconocimiento al escribir y protagonizar El indomable Will Hunting con
        Matt Damon, lo que le valió un Oscar al Mejor Guion Original.
        </Interprete>
        <Interprete foto="https://imageresizer.static9.net.au/RafnOVipHXEWCz0HdG83W3OE5Uo=/696x552/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F9cc18c98-1377-4427-88b1-73682b9b0e12" nombre="Minnie Driver">
        Minnie Driver es una actriz y cantantebritánica nacida en Londres el 31 de enero de 1970, conocida por su papel en
        "El indomable Will Hunting" (1997), que le valió una nominación al Óscar.
        </Interprete>
      </Contenedor>
    </>
  );
};

export default App;
