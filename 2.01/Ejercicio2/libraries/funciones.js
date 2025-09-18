//Esta función calcula la media de puntos de un equipo.
export function calcularMedia (equipo) {
    let sumaPuntos = 0;

    //Este for recorre el equipo y suma los puntos para calcular la media más adelante.
    for (let i = 0; i < equipo.length; i++) {
        sumaPuntos += equipo[i];
    }
    let mediaPuntos = sumaPuntos / equipo.length;
    return mediaPuntos;
}

//Esta función compara la media de dos equipos y muestra por consola el ganador, si no hay empate.
export function ganador(media1, media2) {
    if (media1 > media2) {
        console.log('Gana el equipo 1 con una media de ' + media1 + ' puntos');
    } else if (media2 > media1) {
        console.log('Gana el equipo 2 con una media de ' + media2 + ' puntos');
    } else {
        console.log('Empate entre los dos equipos con una media de ' + media1 + ' puntos');
    }
}

//Tras la adición del equipo de María, esta función compara la media de tres equipos y muestra por consola un ganador o si hay empate.
export function ganadorConTresEquipos(media1, media2, media3) {
    if (media1 > media2 && media1 > media3) {
        console.log('Gana el equipo 1 con una media de ' + media1 + ' puntos');
    } else if (media2 > media1 && media2 > media3) {
        console.log('Gana el equipo 2 con una media de ' + media2 + ' puntos');
    } else if (media3 > media1 && media3 > media2) {
        console.log('Gana el equipo 3 con una media de ' + media3 + ' puntos');
    } else {
        console.log('Hay un empate entre los equipos');
    }
}