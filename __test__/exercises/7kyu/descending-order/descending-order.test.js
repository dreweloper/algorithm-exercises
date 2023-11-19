const descendingOrder = require('./descending-order');

describe('Exercise tests', () => {

    let result;

    test('42145 should return 54421', () => {

        result = descendingOrder(42145);

        expect(result).toBe(54421);

    });

    test('145263 should return 654321', () => {

        result = descendingOrder(145263);

        expect(result).toBe(654321);

    });

    test('0 should return 0', () => {

        result = descendingOrder(0);

        expect(result).toBe(0);

    });

});