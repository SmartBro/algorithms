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
    const [,inversions] = sortAndCountInversions(input);
    return inversions;
}

/**
 * 
 * @param {Number[]} input
 * @returns {Pair<Number[], Number>} [sorted, inversionsCount]
 */
function sortAndCountInversions(input) {
    const n = input.length;
    if (n < 2) return [input, 0];

    const mid = Math.floor(n / 2);
    const [left, leftInversions] = sortAndCountInversions(input.slice(0, mid));
    const [right, rightInversions] = sortAndCountInversions(input.slice(mid));
    const [sorted, splitInversions] = mergeAndCountSplitInversions(left, right);

    return [sorted, leftInversions + rightInversions + splitInversions];
}

/**
 * 
 * @param {Number[]} left
 * @param {Number[]} right
 * @returns {Pair<Number[], Number>} sortedMerged splitInversions
 */
function mergeAndCountSplitInversions(left, right) {
    const n = left.length + right.length;
    const sorted = new Array(n);
    let i = 0, j = 0, k = 0, splitInversions = 0;
    for (; k < n && i < left.length && j < right.length; k++) {
        if (left[i] < right[j]) sorted[k] = left[i++];
        else {
            sorted[k] = right[j++];
            splitInversions += left.length - i;
        }
    }
    while(i < left.length) {
        sorted[k++] = left[i++];
    }
    while(j < right.length) {
        sorted[k++] = right[j++];
    }

    return [sorted, splitInversions];
}

module.exports = {
    countInversions,
    countInversionsBruteForce,
};
