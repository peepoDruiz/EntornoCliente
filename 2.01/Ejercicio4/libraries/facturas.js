export function validarProdcutos(nombre = 'Producto genérico', precio = 100, impuesto = 21) {
    if (isNaN(precio) || isNaN(impuesto)) {
        console.log('El precio y el impuesto deben ser números.');
        return;
    }

    let precioFinal = precio + (precio * impuesto / 100);

    console.log(nombre + ' ' + precioFinal);
}
