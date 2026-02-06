const Formulario = () => {
  return (
    <>
      <form>
        <label htmlFor="nombre">Nombre del disco: </label>
        <br />
        <input name="nombre" type="text" placeholder="Chromakopia" />
        <br />
        <label htmlFor="caratula">Carátula del disco: </label>
        <br />
        <input
          name="caratula"
          type="text"
          placeholder="https://www.lahiguera.net/musicalia/artistas/tyler_the_creator/disco/13824/tyler_the_creator_chromakopia-portada.jpg"
        />
        <br />
        <label htmlFor="grupo">Grupo o intérprete: </label>
        <br />
        <input name="grupo" type="text" placeholder="Tyler, The Creator" />
        <br />
        <label htmlFor="publicacion">Año de publicación: </label>
        <br />
        <input type="number" name="publicacion" placeholder="2024" min="1887" max="2026" />
        <br />
        <label>Género/s: </label>
        <br />
        <label>
          Rap <input name="rap" id="rap" type="checkbox" value="rap" />
        </label>
        <label>
          Reguetón <input name="regueton" id="regueton" type="checkbox" value="regueton" />
        </label>
        <label>
          Pop <input name="pop" id="pop" type="checkbox" value="pop" />
        </label>
        <label>
          Rock <input name="rock" id="rock" type="checkbox" value="rock" />
        </label>
      </form>
    </>
  );
};

export default Formulario;
