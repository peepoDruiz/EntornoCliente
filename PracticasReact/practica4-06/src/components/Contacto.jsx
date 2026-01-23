import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contacto = () => {

    const navegar = useNavigate();

  return (
    <>
        <h1>Contacto</h1>
        <input type="button" value="Volver a inicio" onClick={() => {
            navegar('/');
        }}/>
    </>
  )
}

export default Contacto
