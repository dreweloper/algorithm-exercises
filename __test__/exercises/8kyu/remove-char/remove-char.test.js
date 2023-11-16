const removeChar = require('./remove-char');

describe('Exercise tests', () => {

    let result;

    test('Argument is not a valid string', () => {

        const value = 123;

        result = removeChar(value);

        expect(result).toBe(`${value} is not a valid string.`)

    });

    test('An empty string should return another empty string', () => {

        result = removeChar('');

        expect(result).toBe('');

    });

    test('A string of length 1 should return an empty string.', () => {

        result = removeChar('a');

        expect(result).toBe('');

    });

    test('Should return "ell"', () => {

        result = removeChar('Hello');

        expect(result).toBe('ell');

    });

    test('Should return " **"', () => {

        result = removeChar('  ***');

        expect(result).toBe(' **');

    });

});