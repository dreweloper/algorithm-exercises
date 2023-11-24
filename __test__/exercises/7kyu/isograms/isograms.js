//TODO: Un isograma es una palabra que no tiene letras repetidas, consecutivas o no consecutivas. Implementa una función que determine si una cadena que sólo contiene letras es un isograma.
// Suponga que la cadena vacía es un isograma. Ignore las mayúsculas y minúsculas.

const isIsogram = (str) => {

    if (typeof str !== 'string') return `${str} is not a valid string.`;

    const nonRepeatedChar = [];

    for (let i = 0; i < str.length; i++) {

        const index = nonRepeatedChar.findIndex(item => item === str[i].toLowerCase());

        if (index === -1) nonRepeatedChar.push(str[i].toLowerCase());

    };

    return nonRepeatedChar.join('').length === str.length ? true : false;

};

module.exports = isIsogram;