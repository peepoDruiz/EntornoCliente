import { Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Peliculas from '../pages/Peliculas.jsx';
import Interpretes from '../pages/Interpretes.jsx';
import Galeria from '../pages/Galeria.jsx';
import Error from '../pages/Error.jsx';
import AcercaDe from '../pages/AcercaDe.jsx';

const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Peliculas' element={<Peliculas/>}/>
            <Route path='/Interpretes' element={<Interpretes/>}/>
            <Route path='/Galeria' element={<Galeria/>}/>
            <Route path='/AcercaDe' element={<AcercaDe/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  );
}

export default Rutas
