import { Link } from "react-router-dom";
import '../../css/Menu.css';

const Menu = () => {
  return (
    <>
        <nav className="nav-barra">
            <Link className="nav-boton" to={"/"}>Inicio</Link>
            <Link className="nav-boton" to={"/Peliculas"}>Películas</Link>
            <Link className="nav-boton" to={"/Interpretes"}>Intérpretes</Link>
            <Link className="nav-boton" to={"/Galeria"}>Galería</Link>
            <Link className="nav-boton" to={"/AcercaDe"}>Acerca de</Link>
        </nav>
    </>
  )
}

export default Menu
