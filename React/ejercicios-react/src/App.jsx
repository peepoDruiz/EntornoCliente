import { useState } from 'react';
import './App.css';
import Listado from './components/Listado/Listado.jsx';
import ContadorConLimites from './components/ContadorConLimites/ContadorConLimites.jsx';
import ContadorLikes from './components/ContadorLikes/ContadorLikes.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listado>Ejercicio 1</Listado>
      <ContadorConLimites>Ejercicio 2</ContadorConLimites>
      
      <ContadorLikes>Ejercicio 3</ContadorLikes>
    </>
  )
}

export default App
