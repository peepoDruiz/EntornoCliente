import { useState } from "react";
import ValorEstado from "./tools/ValorEstado.jsx";

const Formulario = () => {
  const valoresIniciales = {
    nombreDisco: "",
    caratulaDisco: "",
    autorDisco: "",
    fechaPublicacionDisco: "",
    generos: "",
  };

  //Estado para los valores del disco
  const [disco, setDisco] = useState(valoresIniciales);

  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDisco({ ...disco, [name]: value });
  };

  const actualizarDatoCheck = (evento) => {
    const { name } = evento.target;
    const value = disco[name] === "" ? evento.target.value : "";
    setDisco({ ...disco, [name]: value });
  };

  return (
    <>
      <form>
        <label htmlFor="nombreDisco">Nombre del disco:</label>
        <br />
        <input
          name="nombreDisco"
          type="text"
          placeholder="Chromakopia"
          value={disco.nombreDisco || ""}
          onChange={(evento) => {
            actualizarDato(evento);
          }}
        />
        <br />
        <label htmlFor="caratulaDisco">Carátula del disco:</label>
        <br />
        <input
          name="caratulaDisco"
          type="text"
          placeholder="https://www.lahiguera.net/musicalia/artistas/tyler_the_creator/disco/13824/tyler_the_creator_chromakopia-portada.jpg"
          value={disco.caratulaDisco || ""}
          onChange={(evento) => {
            actualizarDato(evento);
          }}
        />
        <br />
        <label htmlFor="autorDisco">Grupo o intérprete:</label>
        <br />
        <input
          name="autorDisco"
          type="text"
          placeholder="Tyler, The Creator"
          value={disco.autorDisco || ""}
          onChange={(evento) => {
            actualizarDato(evento);
          }}
        />
        <br />
        <label htmlFor="fechaPublicacionDisco">Año de publicación:</label>
        <br />
        <input
          type="number"
          name="fechaPublicacionDisco"
          placeholder="2024"
          min="1887"
          max="2026"
          value={disco.fechaPublicacionDisco || ""}
          onChange={(evento) => {
            actualizarDato(evento);
          }}
        />
        <br />
        <label>Género/s:</label>
        <br />
        <label>
          Rap
          <input name="rap" id="rap" type="checkbox" value="rap" />
        </label>
        <label>
          Reguetón
          <input
            name="regueton"
            id="regueton"
            type="checkbox"
            value="regueton"
          />
        </label>
        <label>
          Pop <input name="pop" id="pop" type="checkbox" value="pop" />
        </label>
        <label>
          Rock <input name="rock" id="rock" type="checkbox" value="rock" />
        </label>
        <br />
        <label>¿Prestado?</label>
        <br />
        <label>
          <input
            name="prestado"
            type="radio"
            value="sí"
            checked={disco.prestado === "sí"}
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          />
          Sí
        </label>
        <label>
          <input
            name="prestado"
            type="radio"
            value="no"
            checked={disco.prestado === "no"}
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          />
          No
        </label>
        <br />
        <input
          type="button"
          value="Borrar formulario"
          onClick={() => {
            setDisco(valoresIniciales);
          }}
        />
      </form>

      <br />

      <ValorEstado estado={disco} titulo="disco completo" />
    </>
  );
};

export default Formulario;
