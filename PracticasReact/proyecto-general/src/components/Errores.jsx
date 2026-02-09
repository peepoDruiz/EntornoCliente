

const Errores = ({ erroresMostrar }) => {
  return (
    <>
        <h2>Control de errores</h2>
        <div className={erroresMostrar.length ? "errores" : "sinErrores"}>
            {erroresMostrar.length
            ? erroresMostrar.map((valor, indice) => {
                <h4 key={indice}>{valor}</h4>
            })
        : "No se han econtrado errores en el formulario."}
        </div>
    </>
  )
}

export default Errores