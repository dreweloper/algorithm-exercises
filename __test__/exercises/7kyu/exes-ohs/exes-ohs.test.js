const checkXO = require('./exes-ohs');

describe('Exercise tests', () => {

    let result;

    test('The argument is not a valid string', () => {

        const value = [];

        result = checkXO(value);

        expect(result).toBe(`${value} is not a valid string.`);

    });

    test('Should return true', () => {

        result = checkXO('XoXo');

        expect(result).toBeTruthy();

    });

    test('Should return false', () => {

        result = checkXO('oxo');

        expect(result).toBeFalsy();

    });

});