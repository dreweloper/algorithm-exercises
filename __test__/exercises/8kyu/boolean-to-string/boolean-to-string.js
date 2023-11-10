//TODO: Completa la función que recibe un valor booleano y devuelve una cadena "Yes" para true, o una cadena "No" para false.

const booleanToString = (boolean) => {

    return typeof boolean !== 'boolean' ? `${boolean} is not a valid boolean.` : boolean ? 'Yes' : 'No';

};

module.exports = booleanToString;