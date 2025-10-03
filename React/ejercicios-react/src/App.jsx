import { useState } from 'react'
import './App.css'
import Listado from './components/Listado/Listado.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listado>Hola</Listado>
    </>
  )
}

export default App
