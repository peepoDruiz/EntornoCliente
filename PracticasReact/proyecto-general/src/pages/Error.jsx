import { useNavigate } from 'react-router-dom';

const Error = () => {

  const navegar = useNavigate();

  return (
    <>
        <h1>Esta página no existe.</h1>
        <input type="button" value="Volver a inicio" onClick={() => {
            navegar('/');
        }}/>
    </>
  );
}

export default Error
