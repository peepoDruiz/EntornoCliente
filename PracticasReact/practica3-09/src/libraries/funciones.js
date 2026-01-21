"use strict";

const filtrar = (datosAFiltrar, filtro, propiedad) => {
  const filtrados = datosAFiltrar.filter((dato) =>
    dato[propiedad].includes(filtro),
  );
  return filtrados;
};

const ordenarLista = (datos, propiedad, ascendente) => {
  const ordenados = [...datos];
  ordenados.sort((a, b) => {
    const valorA = a[propiedad];
    const valorB = b[propiedad];

    if (ascendente) {
      return valorA.localeCompare(valorB);
    } else {
      return valorB.localeCompare(valorA);
    }
  });
  return ordenados;
};

const borrarElemento = (datos, idABorrar) => {
  const discenteBorrado = datos.filter(
    (dato) => parseInt(dato.id) !== parseInt(idABorrar),
  );
  return discenteBorrado;
};

export { filtrar, ordenarLista, borrarElemento };
