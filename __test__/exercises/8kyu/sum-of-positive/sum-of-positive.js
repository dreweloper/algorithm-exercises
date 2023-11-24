//TODO: De un array de números, devuelve la suma de todos los positivos.
// Nota: si no hay nada que sumar, la suma es 0 por defecto.

const positiveSum = (arr) => {

    if(!Array.isArray(arr)) return `${arr} is not a valid array.`;

    const positives = [];

    arr.forEach(num => num > 0 && positives.push(num));

    return (arr.length === 0 || positives.length === 0) ? 0 : positives.reduce((a, b) => a + b);

};

module.exports = positiveSum;