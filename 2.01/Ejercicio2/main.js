import {calcularMedia} from './libraries/funciones.js';
import {ganador} from './libraries/funciones.js';
import {ganadorConTresEquipos} from './libraries/funciones.js';

let equipoJuan = [89, 120, 103];
let equipoMiguel = [116, 94, 123];


let mediaEquipoJuan = calcularMedia(equipoJuan);
let mediaEquipoMiguel = calcularMedia(equipoMiguel);

console.log(ganador(mediaEquipoJuan, mediaEquipoMiguel));

//Añadir a María
let equipoMaria = [97, 134, 105];

let mediaEquipoMaria = calcularMedia(equipoMaria);

console.log(ganadorConTresEquipos(mediaEquipoJuan, mediaEquipoMiguel, mediaEquipoMaria));