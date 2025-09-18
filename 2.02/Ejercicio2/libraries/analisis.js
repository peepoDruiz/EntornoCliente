export function analisisNumerico(valor) {
    //Comprueba si es un número.
    if (isNaN(valor)) {
        console.log("No es un número");
        return;
    }

    //Comprueba si es par o impar.
    if (valor % 2 === 0) {
        console.log("El número " + valor + " es par");
    } else {
        console.log("El número " + valor + " es impar");
    }

    //Comprueba si es positivo o negativo.
    if (valor >= 0) {
        console.log("El número " + valor + " es positivo");
    } else {
        console.log("El número " + valor + " es negativo");
    }

    //Comprueba si es primo.
    if ( valor === 1) {
        console.log("El número " + valor + " no es primo");
        return;
    } else if (valor === 2 || valor === 3 || valor === 5 || valor === 7) {
        console.log("El número " + valor + " es primo");
    } else  if (valor % 2 === 0 || valor % 3 === 0 || valor % 5 === 0 || valor % 7 === 0) {
        console.log("El número " + valor + " no es primo");
    }
}
