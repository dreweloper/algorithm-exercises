//TODO: elevar al cuadrado cada dígito de un número y concatenarlos.
// Ejemplo: si pasamos 9119 por la función, saldrá 811181, porque 9² es 81 y 1² es 1. (81-1-1-81).
// Nota: la función acepta un número entero y devuelve un número entero.

const squareDigits = (num) => {

    const result = [];

    String(num).split('').forEach(n => result.push(Math.pow(parseInt(n), 2)));

    return parseInt(result.join(''));

};

module.exports = squareDigits;