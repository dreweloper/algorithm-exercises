//TODO: Hacer una función que reciba cualquier número entero no negativo como argumento y devolverlo con sus dígitos en orden descendente.

const descendingOrder = (num) => {

    return parseInt(String(num).split('').sort().reverse().join(''));

};

module.exports = descendingOrder;