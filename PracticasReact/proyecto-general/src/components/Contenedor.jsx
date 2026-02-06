import './Contenedor.css';

const Contenedor = (props) => {
  return (
    <>
      <div className={props.clase}>
        <h2>{props.titulo}</h2>
        <div>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Contenedor;
