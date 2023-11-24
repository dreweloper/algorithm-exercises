const booleanToString = require('./boolean-to-string');

describe('Exercise tests', () => {

    let result;

    test('Should return "Yes"', () => {

        result = booleanToString(true);

        expect(result).toBe('Yes');

    });

    test('Should return "No"', () => {

        result = booleanToString(false);

        expect(result).toBe('No');

    });

    test('The argument is not a valid boolean', () => {

        const value = 'Not a boolean';

        result = booleanToString(value);

        expect(result).toBe(`${value} is not a valid boolean.`);

    });

});