import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../components/Inicio.jsx';
import Contacto from '../components/Contacto.jsx';
import AcercaDe from '../components/AcercaDe.jsx';
import Productos from '../components/Productos.jsx';
import Error from '../components/Error.jsx';


const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/AcercaDe' element={<AcercaDe/>}/>
            <Route path='/Productos' element={<Productos/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  )
}

export default Rutas
