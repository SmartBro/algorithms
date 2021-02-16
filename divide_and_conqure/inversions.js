const read = require('../utils/read');

/**
 * Inefective brute force algorithm O(n^2)
 * @param {Number[]} input 
 */
function countInversionsBruteForce(input) {
    const size = input.length;
    let inversions = 0;
    for (let i = 0; i < size - 1; i++) {
        for (let j = i + 1; j < size; j++) {
            if (input[i] > input[j]) inversions++;
        }
    }
    return inversions;
}

/**
 * Effective algorithm O(nlog(n))
 * @param {Number[]} input
 */
function countInversions(input) {
    // TODO: implement
}

module.exports = {
    countInversions,
    countInversionsBruteForce,
};
