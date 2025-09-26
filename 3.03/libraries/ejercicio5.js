"use strict";

export const printObject = (object) => {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if (typeof object[key] === "number") {
                console.log(`El tipo de dato de ${key} es un ${typeof key} y su valor es: ${object[key]}`);
            } else if (typeof object[key] === "string") {
                console.log(`El tipo de dato de ${key} es un ${typeof key} y el contenido del String es: ${object[key]}`);
            } else if (typeof object[key] === "object") {
                if (Array.isArray) {
                    console.log(`El tipo de dato de ${key} es un array.`);
                } else {
                    console.log(`El tipo de dato es un objeto y su contenido es: `)
                    for (key in object) {
                        console.log(`La clave es ${key}, su valor es ${object[key]} y es del tipo ${typeof object[key]}.`);
                    };
                };
            };
        };
    };
};