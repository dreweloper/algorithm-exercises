const evenOrOdd = require('./even-odd');

describe("Sample tests", () => {

    let result;

    test("2 is even", () => {

        result = evenOrOdd(2);

        expect(result).toBe('Even');

    });

    test("7 is odd", () => {

        result = evenOrOdd(7);

        expect(result).toBe('Odd');
        
    });

    test("-42 is even", () => {

        result = evenOrOdd(-42);

        expect(result).toBe('Even');
        
    });

    test("-7 is odd", () => {

        result = evenOrOdd(-7);

        expect(result).toBe('Odd');
        
    });

    test("0 is even", () => {

        result = evenOrOdd(0);

        expect(result).toBe('Even');
        
    });

});