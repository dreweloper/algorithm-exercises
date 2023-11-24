//TODO: Crea una función que reciba una palabra (string) por argumento y que devuelva el character central de la palabra.
// Si la longitud de la palabra es impar, devuelve el character del medio.
// Si la longitud de la palabra es par, devuelve los 2 characters del medio.

const getMiddle = (word) => {

    if (typeof word !== 'string') return `${word} is not a valid string.`;

    const length = word.length % 2 === 0 ? 'Even' : 'Odd';

    let index;

    if (length === 'Odd') {

        index = Math.floor(word.length / 2);

        return word.substring(index, index + 1);

    } else {

        index = word.length / 2;

        return word.substring(index - 1, index + 1);

    }

};

module.exports = getMiddle;