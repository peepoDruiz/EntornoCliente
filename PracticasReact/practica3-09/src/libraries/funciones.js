"use strict";

const filtrar = (datosAFiltrar, filtro, propiedad) => {
    const filtrados = datosAFiltrar.filter(dato =>
      dato[propiedad].includes(filtro)
    );
    return filtrados;
}

const borrarElemento = () => {
    
}

export { filtrar };