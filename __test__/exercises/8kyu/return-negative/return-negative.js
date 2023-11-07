//TODO: En esta tarea te dan un número y tienes que convertirlo en negativo. Pero, ¿quizá el número ya es negativo?
// El número puede ser ya negativo, en cuyo caso no es necesario ningún cambio.
// El cero (0) no se comprueba para ningún signo específico. Los ceros negativos no tienen sentido matemático.

const makeNegative = (num) => {

    return num === -0 ? 0 : num <= 0 ? num : -num;

};

module.exports = makeNegative;