const { getTestCases } = require('../utils/read');
const { multiply } = require('./karatsuba');

describe('Karatsuba multiplication algorithm', () => {
    const testCases = getTestCases('course1/assignment1Multiplication');

    // TODO: fix Karatsuba algorithm
    xit.each(testCases)('multiplies A*B', (input, output) => {
        const [ a, b ] = input;
        const [ expected ] = output;
        expect(multiply(a, b)).toEqual(expected);
    });
});
