//TODO: Escribe una función que acepte un número entero "n" y una cadena "s" como parámetros, y devuelva una cadena de "s" repetida exactamente "n" veces.

const repeatString = (num, str) => {

    if (isNaN(num) || typeof str !== 'string') return 'One or both arguments are not valid.';

    // let result = [];

    // for (let i = 0; i < num; i++) {

    //     result.push(str);

    // };

    // return result.join('');

    return str.repeat(num);

};

module.exports = repeatString;