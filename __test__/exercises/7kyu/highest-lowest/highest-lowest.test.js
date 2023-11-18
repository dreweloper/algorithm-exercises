const highAndLow = require('./highest-lowest');

describe('Exercise tests', () => {

    let result;

    test('Should return "42 -9"', () => {

        result = highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4');

        expect(result).toBe('42 -9');

    });

    test('Should return "3 1"', () => {

        result = highAndLow('1 2 3');

        expect(result).toBe('3 1');

    });

});