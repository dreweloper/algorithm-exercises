const positiveSum = require('./sum-of-positive');

describe('Exercise tests', () => {

    let result;

    test('Should return 15', () => {

        result = positiveSum([1,2,3,4,5]);

        expect(result).toBe(15);

    });

    test('An empty array should return 0', () => {

        result = positiveSum([]);

        expect(result).toBe(0);

    });

    test('An array containing only negative numbers should return 0', () => {

        result = positiveSum([-1,-2,-3,-4,-5]);

        expect(result).toBe(0);

    });

    test('Should return 9', () => {

        result = positiveSum([-1,2,3,4,-5]);

        expect(result).toBe(9);

    });

    test('The argument is not a valid array', () => {

        const value = 'Not an array';

        result = positiveSum(value);

        expect(result).toBe(`${value} is not a valid array.`);

    });

});