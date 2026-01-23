import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
        <nav>
            <Link to='/'>Inicio</Link>
            <Link to='/Contacto'>Contacto</Link>
            <Link to='/AcercaDe'>Acerca De</Link>
            <Link to='/Productos'>Productos</Link>
        </nav>
    </>
  )
}

export default Menu;
