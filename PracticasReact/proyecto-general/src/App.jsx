import "./App.css";
import Menu from "./components/menu/Menu.jsx";
import Rutas from "./routes/Rutas.jsx";
import Contenedor from "./components/Contenedor.jsx";

function App() {
  return (
    <>
      <Contenedor titulo="Discos" clase="header" />
      <Menu />
      <Contenedor clase="contenido-principal">
        <Rutas />
      </Contenedor>
      <Contenedor titulo="Pie de página" clase="footer" />
    </>
  );
}

export default App;
