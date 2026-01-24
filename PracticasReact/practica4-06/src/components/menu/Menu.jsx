import { Link } from "react-router-dom";
import "../../css/Menu.css";

const Menu = () => {
  return (
    <>
      <nav className="barra-nav">
        <ul className="links-nav">
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>

          <li>
            <Link to="/AcercaDe">Acerca De</Link>
          </li>

          <li>
            <Link to="/Productos">Productos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
