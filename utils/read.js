const fs = require('fs');
const path = require('path');
const os = require('os');

function read(input, type = String) {
    try {
        const data = fs.readFileSync(input, 'utf-8');
        return data.split(os.EOL).map(type);
    } catch(err) {
        console.error(`Can't read file ${path}`, err);
    }
}

function readAssignmentInput(input, type = String) {
    return read(path.resolve(__dirname, '../inputs/', input), type);
}

function getTestCases(assignment, type = String) {
    const INPUT_PREFIX = 'input_';
    const OUTPUT_PREFIX = 'output_';
    const testCasesPath = path.resolve(__dirname, '../stanford-algs/testCases/', assignment);
    const files = fs.readdirSync(testCasesPath);
    return files
        .filter((fileName) => fileName.startsWith(INPUT_PREFIX))
        .map((input) => {
            const inputData = read(path.resolve(testCasesPath, input), type);
            const output = input.replace(INPUT_PREFIX, OUTPUT_PREFIX);
            const outputData = read(path.resolve(testCasesPath, output), type);
            return [ inputData, outputData ];
        });
}

getTestCases('course1/assignment2Inversions');

module.exports = {
    read,
    readAssignmentInput,
    getTestCases,
};
