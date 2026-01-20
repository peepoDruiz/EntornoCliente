"use strict";

const filtrar = (datosAFiltrar, filtro, propiedad) => {
  const filtrados = datosAFiltrar.filter((dato) =>
    dato[propiedad].includes(filtro),
  );
  return filtrados;
};

const ordenarLista = (datos, propiedad) => {
  const ordenados = [...datos];
  ordenados.sort((a, b) => {
    const valorA = a[propiedad];
    const valorB = b[propiedad];

    return valorA.localeCompare(valorB);
  });
  return ordenados;
};

const borrarElemento = () => {
  //Pedir ayuda
};

export { filtrar, ordenarLista };
