"use strict";

//Recorre un array e imprime cada valor en mayúsculas.
export const printUpperCase = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].toUpperCase());
    }
}