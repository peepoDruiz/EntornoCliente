import { useNavigate } from 'react-router-dom';

const AcercaDe = () => {

    const navegar = useNavigate();

  return (
    <>
        <h1>Acerca de</h1>
        <input type="button" value="Volver a inicio" onClick={() => {
            navegar('/');
        }}/>
    </>
  );
}

export default AcercaDe
