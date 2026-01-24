import { useNavigate } from 'react-router-dom';

const Error = () => {

  const navegar = useNavigate();

  return (
    <>
        <h1>Eres retrasado y feo.</h1>
        <input type="button" value="Volver a inicio" onClick={() => {
            navegar('/');
        }}/>
    </>
  );
}

export default Error
