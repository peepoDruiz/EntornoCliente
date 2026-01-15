"use strict";

//Genera un reporte con toda la información de un objeto student.
export const reportGenerator = (student) => {
    for (let key in student) {
        if (student.hasOwnProperty(key)) {
            console.log(`La clave es ${key} y el valor es ${student[key]}
            y es del tipo ${typeof student[key]}.`);
        };
    };
};