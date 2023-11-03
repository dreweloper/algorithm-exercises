const opposite = require('./opposite-number');

describe('Exercise tests', () => {

    let result;

    test('Should return -1', () => {

        result = opposite(1);

        expect(result).toBe(-1);

    });
    
    test('Should return 0', () => {

        result = opposite(0);

        expect(result).toBe(0);

    });

    test('Should return -4.25', () => {

        result = opposite(4.25);

        expect(result).toBe(-4.25);

    });

    test('Should return -3.3333333', () => {

        result = opposite(3.3333333);

        expect(result).toBe(-3.3333333);

    });

    test('Should return 12525220.3325', () => {

        result = opposite(-12525220.3325);

        expect(result).toBe(12525220.3325);

    });

    test('Should return 5', () => {

        result = opposite(-5);

        expect(result).toBe(5);

    });

});