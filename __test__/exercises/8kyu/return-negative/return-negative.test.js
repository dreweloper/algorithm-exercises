const makeNegative = require('./return-negative');

describe('Exercise tests', () => {

    let result;

    test('Should return -42', () => {

        result = makeNegative(42);

        expect(result).toBe(-42);

    });

    test('Should return -5', () => {

        result = makeNegative(-5);

        expect(result).toBe(-5);

    });

    test('Should return 0', () => {

        result = makeNegative(-0);

        expect(result).toBe(0);

    });

});