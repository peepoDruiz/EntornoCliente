export function multiplosTres(numero) {
    //Comprueba si es entero
    if (!Number.isInteger(numero) || numero < 1) {
        console.log("El valor introducido no es un número entero positivo.");
        return;
    }

    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0) {
            console.log(i + " es múltiplo de 3.");
        }
    }
}