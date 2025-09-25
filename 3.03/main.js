"use strict";

import { constructor } from "./libraries/ejercicio1.js";
import { reportGenerator } from "./libraries/ejercicio2.js";

//Ejercicio 1.
console.log("Ejercicio 1.")
let student1 = constructor("Caballerito", 2025, "Curso de Hollow Knight");
let student2 = constructor("Hornet", 2025, "Curso de Hollow Knight")
let student3 = constructor("Radahn", 2024, "Curso de Elden Ring")
let student4 = constructor("Malenia", 2024, "Curso de Elden Ring")

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

//Ejercicio 2.
console.log("Ejercicio 2.")
console.log("Alumno 1.")
reportGenerator(student1);
console.log("Alumno 2.")
reportGenerator(student2);
console.log("Alumno 3.")
reportGenerator(student3);
console.log("Alumno 4.")
reportGenerator(student4);

//Ejercicio 3.
let discente = {
    id: 161204,
    name: "Maelle",
    surname: "Expedition 33",
    hobbies: ["Pintar", "Viajar"],
    marks: {
        first: 10,
        second: 9,
        third: 10
    }
};