export function printarYMultiplicar(veces, numero) {
    let numeroPrintado = numero;
    for (let i = 0; i < veces; i++) {
        console.log(numeroPrintado);
        numeroPrintado *= 2;
    }
}