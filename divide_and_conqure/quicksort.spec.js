const { getTestCases } = require('../utils/read');
const { countComparisonsFirst, countComparisonsLast, countComparisonsMedian } = require('./quicksort');

describe('QuickSort', () => {
    const testCases = getTestCases('course1/assignment3Quicksort', Number);

    it.each(testCases)('should count comparisons', (input, output) => {
        const [ first, last, median ] = output;
        expect(countComparisonsFirst([ ...input ])).toBe(first);
        expect(countComparisonsLast([ ...input ])).toBe(last);
        expect(countComparisonsMedian([ ...input ])).toBe(median);
    });
});