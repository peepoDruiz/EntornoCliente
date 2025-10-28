"use strict";

window.onload = () => {
    console.log("hola")
    let elemento = document.getElementsByClassName("toggleElement");
    elemento.addEventListener(
    "click",
    () => {
      saludar();
    },
    false
  );

    const saludar = () => {
        console.log("hola")
    }
} //Fin del window.onload.