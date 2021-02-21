const { getTestCases } = require('../utils/read');
const { countInversions } = require('./inversions');

describe('Inversions', () => {
    const testCases = getTestCases('course1/assignment2Inversions', Number);

    it.each(testCases)('should count inversions', (input, output) => {
        expect(countInversions(input)).toBe(output[0]);
    });
});