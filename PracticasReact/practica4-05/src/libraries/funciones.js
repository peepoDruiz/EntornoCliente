"use strict";

const formatearEuro = (cantidad) => {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
    }).format(cantidad);
}

export {formatearEuro} ;