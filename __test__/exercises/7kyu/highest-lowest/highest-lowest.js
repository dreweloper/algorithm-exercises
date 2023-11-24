//TODO: crea una función que recibe por argumento una cadena de números separados por espacios, y tiene que devolver el número más alto y el más bajo.
// Los números de la cadena son válidos, no es necesario validarlos.
// Siempre habrá al menos un número en la cadena de entrada.
// La cadena de salida debe tener dos números separados por un espacio, y el número más alto es el primero.

const highAndLow = (numbers) => {

    numbers = numbers.split(' ');

    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;

};

module.exports = highAndLow;