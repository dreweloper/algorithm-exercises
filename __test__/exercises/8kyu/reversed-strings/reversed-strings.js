//TODO: Crea una función para que invierta la cadena que recibe por argumento.

const solution = (str) => {

    return (typeof str === 'string') ? str.split('').reverse().join('') : `${str} is not a valid string.`;

};

module.exports = solution;