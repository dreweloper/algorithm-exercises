//TODO: Comprueba si una cadena tiene la misma cantidad de 'x' y 'o'.
// El método debe devolver un booleano y no distinguir entre mayúsculas y minúsculas.
// La cadena puede contener cualquier char.

const checkXO = (str) => {

    if (typeof str !== 'string') return `${str} is not a valid string.`;

    const x = str.toLowerCase().split('').filter(char => char === 'x');

    const o = str.toLowerCase().split('').filter(char => char === 'o');

    return (x.length === o.length);

};

module.exports = checkXO;