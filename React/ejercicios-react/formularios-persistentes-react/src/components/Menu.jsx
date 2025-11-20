import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <nav>
        <Link className='menu-element' to="/">Inicio</Link>
        <Link className='menu-element' to="/InsertarDisco">Insertar Disco</Link>
        <Link className='menu-element' to="/ListarDisco">Listar Disco</Link>
      </nav>
    </div>
  )
}

export default Menu
