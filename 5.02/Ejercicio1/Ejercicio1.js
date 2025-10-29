"use strict";

window.onload = () => {
    //Guardo todos los elementos y su contenido en variables.
    let elemento1 = document.querySelector(".elemento1");
    let elemento2 = document.querySelector(".elemento2");
    let elemento3 = document.querySelector(".elemento3");
    let contenido1 = document.querySelector(".contenido1");
    let contenido2 = document.querySelector(".contenido2");
    let contenido3 = document.querySelector(".contenido3");

    //Al hacer clic en cualquier elemento mostrará su contenido.
    elemento1.addEventListener(
      "click",
      () => {
        //Todos los contenidos tenían en CSS "display: none;". Esto le cambia la clase y no lo oculta.
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