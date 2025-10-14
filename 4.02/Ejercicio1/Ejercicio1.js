"use strict";

//Ejercicio 1.

//Recorre el DOM desde la etiqueta body
export const censorDOM = () => {
    const body = document.body;
    let bodyWords = [];
    for(let i = 0; i < body.children.length; i++) {
        /* console.log("Children")
        console.log(body.children[i]); */
        
        if(body.children[i].innerHTML.includes("sexo")) {
            bodyWords = body.children[i].innerHTML.split(" ");
            for (let i = 0; i < bodyWords.length; i++) {
                /* bodyWords[i].style.color = "blue"; */
                if (bodyWords[i].includes("sexo")) {
                    console.log(bodyWords[i]);
                    bodyWords[i].replace("hola", "sexo")
                    console.log(bodyWords[i])
                }
            }
            /* body.children[i].style.color = "red"; */
        }
    };
};

setTimeout(() => { censorDOM() }, 2000);