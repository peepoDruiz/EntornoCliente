"use strict";

const constructor = (courseName, year, description, student) => {
    return {
        nombre_curso: courseName,
        año: year,
        descripcion: description,
        alumnado: [student]
    } 
};