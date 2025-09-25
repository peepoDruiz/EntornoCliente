"use strict";

/* Constructor de objetos del tipo curso con nombre, año,
descripción y un array de alumnos. */
export const constructor = (courseName, year, description) => {
    return {
        nombre_curso: courseName,
        año: year,
        descripcion: description,
        alumnado: []
    } 
};