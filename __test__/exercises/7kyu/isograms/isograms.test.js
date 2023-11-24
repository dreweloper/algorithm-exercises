const isIsogram = require('./isograms');

describe('Exercise tests', () => {

    let result;

    test('The argument is not a valid string', () => {

        const value = false;

        result = isIsogram(value);

        expect(result).toBe(`${value} is not a valid string.`);

    });

    test('Should return "true"', () => {

        result = isIsogram('Murciélago');

        expect(result).toBeTruthy();

    });

    test('Should return "false"', () => {

        result = isIsogram('Amarillo');

        expect(result).toBeFalsy();

    });

});