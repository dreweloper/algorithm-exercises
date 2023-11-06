const solution = require('./reversed-strings');

describe('Exercise tests', () => {

    let result;

    test('Should return "dlrow"', () => {

        result = solution('world');

        expect(result).toBe('dlrow');

    });

    test('The argument is not a valid string', () => {

        const value = 1;

        result = solution(value);

        expect(result).toBe(`${value} is not a valid string.`);

    });

    test('Empty string returns an empty string', () => {

        result = solution('');

        expect(result).toBe('');

    });

});