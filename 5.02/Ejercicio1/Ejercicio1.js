"use strict";

window.onload = () => {
    console.log("hola");
    let elemento1 = document.querySelector(".elemento1");
    let elemento2 = document.querySelector(".elemento2");
    let elemento3 = document.querySelector(".elemento3");
    let contenido1 = document.querySelector(".contenido1");
    let contenido2 = document.querySelector(".contenido2");
    let contenido3 = document.querySelector(".contenido3");

    elemento1.addEventListener(
      "click",
      () => {
        contenido1.classList.toggle("contenidosMostrados");
      },
      false
    );

    elemento2.addEventListener(
      "click",
      () => {
        contenido2.classList.toggle("contenidosMostrados");
      },
      false
    );

    elemento3.addEventListener(
      "click",
      () => {
        contenido3.classList.toggle("contenidosMostrados");
      },
      false
    );
}; //Fin del window.onload.