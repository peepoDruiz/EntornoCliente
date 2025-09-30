"use strict";

//Genera un array de 10 números aleatorios entre 1 y 10.
export const randomArray = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 10) + 1);
    }
    return array;
}

//Añade a un array los números mayores que 5 de otro array.
export const addAboveFive = (arrayToAdd, arrayToFilter) => {
    for (let i = 0; i < arrayToFilter.length; i++) {
        if (arrayToFilter[i] > 5) {
            arrayToAdd.push(arrayToFilter[i]);
        }
    }
    return arrayToAdd;
}
