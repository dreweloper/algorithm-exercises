const vowelCount = require('./vowel-count');

describe('Exercise tests', () => {

    let result;

    test('Argument is not a valid string', () => {

        const value = true;

        result = vowelCount(value);

        expect(result).toBe(`${value} is not a valid string.`);

    });

    test('The result type is a number', () => {

        result = vowelCount('Hello');

        const type = typeof result;

        expect(type).toBe('number');

    });

    test('Should return 5', () => {

        result = vowelCount('Abracadabra');

        expect(result).toBe(5);

    });

    test('An empty string should return 0', () => {

        result = vowelCount('');

        expect(result).toBe(0);

    });

});