const mathOperations = require('../calculator');

describe("Calculator tests", () => {   //The describe block is an outer description for the test suite
    test('adding 1 + 2 should return 3', () => { //test block – this represents a single test
        expect(mathOperations.sum(1, 2)).toBe(3);//“expect” is nothing but an assertion
    });
    test('Subtracting 10 - 2 should return 8', () => { //test block – this represents a single test
        expect(mathOperations.diff(10, 2)).toBe(8);//“expect” is nothing but an assertion
    });
    test('adding 2 * 2 should return 4', () => { //test block – this represents a single test
        expect(mathOperations.product(2, 2)).toBe(4);//“expect” is nothing but an assertion
    });
})