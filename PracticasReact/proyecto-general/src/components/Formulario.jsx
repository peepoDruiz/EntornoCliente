import { useState } from "react";
import ValorEstado from "./tools/ValorEstado.jsx";

const Formulario = () => {
  const valoresIniciales = {
    nombreDisco: "",
    caratulaDisco: "",
    autorDisco: "",
    fechaPublicacionDisco: "",
    generos: [],
  };

  //Estado para los valores del disco
  const [disco, setDisco] = useState(valoresIniciales);

  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDisco({ ...disco, [name]: value });
  };

  const añadirDato = (evento) => {
    const { name, value } = evento.target;
    if (disco[name].includes(value)) {
      let arrayGeneros = disco[name];
      let nuevaLista = [];
      arrayGeneros.map((genero) => {
        if (genero !== value) {
          nuevaLista = [...nuevaLista, genero]
        }
      })
      setDisco(...disco[name], nuevaLista)
    } else {
      setDisco({ ...disco, [name]: [...disco[name], value] });
    }
    
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
        <label htmlFor="rap">
          Rap
          <input
            name="generos"
            id="rap"
            type="checkbox"
            value="rap"
            onChange={(evento) => {
              añadirDato(evento);
            }}
          />
        </label>
        <label htmlFor="regueton">
          Reguetón
          <input
            name="generos"
            id="regueton"
            type="checkbox"
            value="regueton"
            onChange={(evento) => {
              añadirDato(evento);
            }}
          />
        </label>
        <label htmlFor="pop">
          Pop
          <input
            name="generos"
            id="pop"
            type="checkbox"
            value="pop"
            onChange={(evento) => {
              añadirDato(evento);
            }}
          />
        </label>
        <label htmlFor="rock">
          Rock
          <input
            name="generos"
            id="rock"
            type="checkbox"
            value="rock"
            onChange={(evento) => {
              añadirDato(evento);
            }}
          />
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
