"use strict";

//Ejercicio 1.
export const censorDOM = () => {
    //Asigno el body del HTML a una variable.
  let body = document.body;
    
  //Recorro el body entero.
  for (let i = 0; i < body.children.length; i++) {
    //Si el body incluye la palabra "sexo", la censura.
    if (body.innerHTML.includes("sexo")) {
      body.innerHTML = body.innerHTML.replace("sexo", '<span class="censored">Contenido Bloqueado</span>');
    }
  }
};

setTimeout(() => {
  censorDOM();
}, 2000);
