//TODO: crea una función que reciba una lista (array) y devuelva una nueva lista (array) que contenga solo números.

const filterList = (list) => {

    if (!Array.isArray(list)) return `${list} is not a valid array.`;

    return list.filter(item => typeof item === 'number');

};

module.exports = filterList;