import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
        <nav>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/Peliculas"}>Películas</Link>
            <Link to={"/Interpretes"}>Intérpretes</Link>
            <Link to={"/Galeria"}>Galería</Link>
            <Link to={"/AcercaDe"}>Acerca de</Link>
        </nav>
    </>
  )
}

export default Menu
