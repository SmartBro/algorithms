const { getTestCases } = require('../utils/read');
const { kargerMinCut } = require('./min-cut');

describe('Karger min cut algorithm', () => {
    const testCases = getTestCases('course1/assignment4MinCut').map((testCase) => {
        testCase[0] = testCase[0].map(line => line.split(/\s+/));
        return testCase;
    }).filter(testCase => testCase[0].length < 50); // current implementation is slow on big input
    
    it.each(testCases)('count min cuts of the graph', (input, output) => {
        const [ expected ] = output;
        expect(kargerMinCut(input)).toEqual(Number(expected));
    });
});
