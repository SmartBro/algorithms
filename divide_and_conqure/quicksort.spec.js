const { getTestCases } = require('../utils/read');
const { countComparisons1, countComparisons2, countComparisons3 } = require('./quicksort');

describe('QuickSort', () => {
    const testCases = getTestCases('course1/assignment2Inversions', Number);

    it.each(testCases)('should count comparisons', (input, output) => {
        expect(countComparisons1(input)).toBe(output[0]);
        expect(countComparisons2(input)).toBe(output[1]);
        expect(countComparisons3(input)).toBe(output[2]);
    });
});