//Recibe cómo parámetro un número del 1 al 12 y devuelve el mes de dicho número.
export function mostrarMes(numero) {
    //Valida que el número sea correcto.
    if (isNaN(numero) || numero < 1 || numero > 12) {
        console.log('El número debe estar entre 1 y 12.');
        return;
    }

    //Array con los meses del año.
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril',
        'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    console.log(meses[numero - 1]);
}