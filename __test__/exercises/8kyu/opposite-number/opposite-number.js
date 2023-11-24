//TODO: Dado un número entero o un número en coma flotante, hallar su opuesto. Ejemplo: entero 14, opuesto -14.
// A tener en cuenta: si 'num' es 0, debe devolver el mismo valor.

const opposite = (num) => {

    return num === 0 ? num : num < 0 ? Math.abs(num) : -num;

};

module.exports = opposite;