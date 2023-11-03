//TODO: Crea una función que tome un número entero como argumento y devuelva "Even" para números pares o "Odd" para números impares.

const evenOrOdd = (num) => {

    return num % 2 === 0 ? 'Even' : 'Odd';

};

module.exports = evenOrOdd;