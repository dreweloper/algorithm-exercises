const filterList = require('./filter-list');

describe('Exercise tests', () => {

    let result;

    test('The list is not a valid array', () => {

        const value = 'I am not an array';

        result = filterList(value);

        expect(result).toBe(`${value} is not a valid array.`);

    });

    test('Should return [1,2]', () => {

        result = filterList([1,2,'a','b']);

        expect(result).toStrictEqual([1,2]);

    });

    test('An empty array should return an empty array', () => {

        result = filterList([]);

        expect(result).toStrictEqual([]);

    });

    test('An array without numbers should return an empty array', () => {

        result = filterList(['there', 'is', 'no', 'array']);

        expect(result).toStrictEqual([]);

    });

});