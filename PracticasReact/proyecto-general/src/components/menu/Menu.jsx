import { Link } from "react-router-dom";
import '../Menu.css';

const Menu = () => {
  return (
    <>
        <nav className="nav-barra">
            <Link className="nav-boton" to={"/"}>Inicio</Link>
            <Link className="nav-boton" to={"/InsertarDisco"}>Insertar disco</Link>
            <Link className="nav-boton" to={"/ListarDisco"}>Listar disco</Link>
            <Link className="nav-boton" to={"/AcercaDe"}>Acerca de</Link>
        </nav>
    </>
  )
}

export default Menu
