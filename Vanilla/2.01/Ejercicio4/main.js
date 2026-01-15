import { validarProdcutos } from "./libraries/facturas.js";

validarProdcutos('Ordenador', 1000, 21);
validarProdcutos();
validarProdcutos('Libro', 'feo', 4);
validarProdcutos('Libro', 20, 'feo');