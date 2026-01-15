"use strict";

//Recibe tres notas y calcula la nota media.
export const calcAvg = (first, second, third) => {
    return (first + second + third) / 3;
};

//Imprime por consola un array con el formato (", ").
export const printHobbies = (hobbies) => {
    console.log(hobbies.join(", "));
};

//Imprime por consola un informe completo de un objeto.
export const printReport = (discente) => {
    for (let key in discente) {
        if (discente.hasOwnProperty(key)) {
            console.log(`La clave es ${key} y el valor es ${discente[key]}
            y es del tipo ${typeof discente[key]}.`);
        };
    };
};