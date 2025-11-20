import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import InsertarDisco from '../pages/InsertarDisco'
import ListarDisco from '../pages/ListarDisco'

const Routes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={Inicio}/>
            <Route path='/InsertarDisco' element={InsertarDisco}/>
            <Route path='/ListarDisco' element={ListarDisco}/>
        </Routes>
    </>
  )
}

export default Routes
