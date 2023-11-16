//TODO: crear una función que elimine el primer y el último caracter de una cadena.

const removeChar = (str) => {

    if (typeof str !== 'string') return `${str} is not a valid string.`;

    else if (str.length === 1) return '';

    else return str.substring(1, str.length - 1);

};

module.exports = removeChar;