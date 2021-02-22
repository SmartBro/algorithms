class ComparisonsCounter {
    constructor(getPivotIndex, arr) {
        this.getPivotIndex = getPivotIndex;
        this.arr = arr;
        this.comparisons = 0;
    }

    add(count) {
        this.comparisons += count;
    }

    countComparisons() {
        this.quicksort(0, this.arr.length - 1);
        return this.comparisons;
    }

    quicksort(l, r) {
        if (l >= r) return;

        const i = this.getPivotIndex(this.arr, l, r);
        this.swap(l, i);
        const j = this.partition(l, r);
        this.quicksort(l, j - 1);
        this.quicksort(j + 1, r);
    }

    partition(l, r) {
        this.add(r - l);
        const p = this.arr[l];
        let i = l + 1;
        for (let j = i; j <= r; j++) {
            if (this.arr[j] < p) this.swap(i++, j);
        }
        this.swap(l, i - 1);
        return i - 1;
    }

    swap(i, j) {
        const tmp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = tmp;
    }
}

/**
 * @param {Number[]} input
 * @returns Number
 */
function countComparisonsFirst(input) {
    const counter = new ComparisonsCounter((arr, l, r) => l, input);
    return counter.countComparisons();
}

/**
 * @param {Number[]} input
 * @returns Number
 */
function countComparisonsLast(input) {
    const counter = new ComparisonsCounter((arr, l, r) => r, input);
    return counter.countComparisons();
}

/**
 * @param {Number[]} input
 * @returns Number
 */
function countComparisonsMedian(input) {
    const counter = new ComparisonsCounter((arr, l, r) => {
        const m = Math.floor((r - l) / 2) + l;
        const max = Math.max(arr[l], arr[m], arr[r]);
        const min = Math.min(arr[l], arr[m], arr[r]);
        if (arr[l] < max && arr[l] > min) {
            return l;
        } else if (arr[m] < max && arr[m] > min) {
            return m;
        } else if (arr[r] < max && arr[r] > min) {
            return r;
        }
    }, input);
    return counter.countComparisons();
}

module.exports = {
    countComparisonsFirst,
    countComparisonsLast,
    countComparisonsMedian,
};