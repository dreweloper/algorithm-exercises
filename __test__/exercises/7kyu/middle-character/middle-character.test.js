const getMiddle = require('./middle-character');

describe('Exercise tests', () => {

    let result;

    test('The argument is not a valid string', () => {

        const value = false;

        result = getMiddle(value);

        expect(result).toBe(`${value} is not a valid string.`);

    });

    test('Should return a string', () => {

        result = getMiddle('Hello');

        const type = typeof result;

        expect(type).toBe('string');

    });

    test('"A" should return "A"', () => {

        result = getMiddle('A');

        expect(result).toBe('A');

    });

    test('"Test" should return "es"', () => {

        result = getMiddle('Test');

        expect(result).toBe('es');

    });

    test('"Testing" should return "t"', () => {

        result = getMiddle('Testing');

        expect(result).toBe('t');

    });

});