import { Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Error from '../pages/Error.jsx';
import AcercaDe from '../pages/AcercaDe.jsx';
import InsertarDisco from '../pages/InsertarDisco.jsx';
import ListarDisco from '../pages/ListarDisco.jsx';

const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/InsertarDisco' element={<InsertarDisco/>}/>
            <Route path='/ListarDisco' element={<ListarDisco/>}/>
            <Route path='/AcercaDe' element={<AcercaDe/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  );
}

export default Rutas;
