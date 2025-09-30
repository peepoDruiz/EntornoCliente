"use strict";

import { printUpperCase } from "./libraries/Ejercicio1.js";
import { randomArray } from "./libraries/Ejercicio2.js";
import { addAboveFive } from "./libraries/Ejercicio2.js";

//Ejercicio 1.
const names = ["Daniel", "Javier", "Alejandro", "Juan Carlos", "Rosa"];

console.log("Ejercicio 1:");
printUpperCase(names);

//Ejercicio 2.
//Crea tres arrays de números aleatorios del 1 al 10.
const array1 = randomArray();
const array2 = randomArray();
const array3 = randomArray();

//Crea un array vacío y añade los números mayores que 5 de los tres arrays.
const arrayAboveFive = [];
addAboveFive(arrayAboveFive, array1);
addAboveFive(arrayAboveFive, array2);
addAboveFive(arrayAboveFive, array3);

console.log("Ejercicio 2:");
console.log(array1);
console.log(array2);
console.log(array3);
console.log(arrayAboveFive);

//Ejercicio 3.
const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle también falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francés", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Burdeos",
        pais: "Francia",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];

console.log("Ejercicio 3.")

const usuariosMayoresEdad = () => {
    let usuariosMas18 = [];
    for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].preferencias.edad >= 18) {
        usuariosMas18 = [...usuariosMas18, usuarios[i]]
        }
    }
    return usuariosMas18;
}

let usuarios18 = usuariosMayoresEdad();

console.log(usuarios18);

const usuariosClaristas = () => {
    let usuariosTemaClaro = [];
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].preferencias.tema === "claro") {
            usuariosTemaClaro = [...usuariosTemaClaro, usuarios[i]]
        }
    }
    return usuariosTemaClaro;
}

let usuariosClaritos = usuariosClaristas();

console.log(usuariosClaritos);

const usuariosPesados = () => {
    let usuariosEspecialitos = [];
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].preferencias.edad >= 18 && usuarios[i].preferencias.tema === "claro" && usuarios[i].contacto.direccion.pais === "España") {
            usuariosEspecialitos = [...usuariosEspecialitos, usuarios[i]]
        }
    }
    return usuariosEspecialitos;
}

let usuariosFeos = usuariosPesados();

console.log(usuariosFeos);