const squareDigits = require('./square-digits');

describe('Exercise tests', () => {

    let result;

    test('9119 should return 811181', () => {

        result = squareDigits(9119);

        expect(result).toBe(811181);

    });

    test('0 should return 0', () => {

        result = squareDigits(0);

        expect(result).toBe(0);

    });

    test('765 should return 493625', () => {

        result = squareDigits(765);

        expect(result).toBe(493625);

    });

});