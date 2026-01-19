"use strict";

const arrayToString = (array) => {
    array.join(" - ");
};

const filtrarCurso = (datosAFiltrar, filtro) => {
    const filtrados = datosAFiltrar.filter(dato =>
      dato.curso.includes(filtro)
    );
    console.log(filtrados);
    return filtrados;
}

export { arrayToString, filtrarCurso };