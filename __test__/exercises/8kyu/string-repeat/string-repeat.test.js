const repeatString = require('./string-repeat');

describe('Exercise tests', () => {

    let result;

    test('One or both arguments are no valid', () => {

        result = repeatString(true, false);

        expect(result).toBe('One or both arguments are not valid.');

    });

    test('Should return "HelloHelloHello"', () => {

        result = repeatString(3, 'Hello');

        expect(result).toBe('HelloHelloHello');

    });

    test('Should return "*****"', () => {

        result = repeatString(5, '*');

        expect(result).toBe('*****');

    });

    test('Should return "ha ha "', () => {

        result = repeatString(2, 'ha ');

        expect(result).toBe('ha ha ');

    });

});