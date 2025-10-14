"use strict";

//Ejercicio 1.



//Recorre el DOM desde la etiqueta body

export const censorDOM = () => {
    const body = document.body;
    console.log(body);
    console.log(body.children)
    console.log(body.children.length)
    let bodyElement = "feo";
    for(let i = 0; i < body.children.length; i++) {
        bodyElement = body.children[i];
        if (bodyElement.includes(sexo)) {
            body.children[i].innerHTML = "HOLA!";
        }
    };
};

censorDOM();