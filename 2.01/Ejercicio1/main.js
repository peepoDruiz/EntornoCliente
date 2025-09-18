import { calcularIMC } from './libraries/imc.js';

//La masa está en Kilogramos y la altura en metros.
let masaMarcos = 77;
let alturaMarcos = 1.79;

let masaJuan = 156;
let alturaJuan = 1.54;

let imcMarcos = calcularIMC(masaMarcos, alturaMarcos);
let imcJuan = calcularIMC(masaJuan, alturaJuan);

let imcMarcosMayor = imcMarcos > imcJuan;

console.log('¿Tiene Marcos un IMC mayor que el de Juan?: ', imcMarcosMayor);