import { useState } from 'react';
import './App.css';
import Listado from './components/Listado/Listado.jsx';
import ContadorConLimites from './components/ContadorConLimites/ContadorConLimites.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listado>Ejercicio 1</Listado>
      <ContadorConLimites>Ejercicio 2</ContadorConLimites>
    </>
  )
}

export default App
