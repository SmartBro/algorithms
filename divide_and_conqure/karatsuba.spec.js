const { it, expect } = require('@jest/globals');
const { multiply, multiplyInternal } = require('./karatsuba');

describe('Karatsuba multiplication algorithm', () => {
    it.each`
        a         | b        | expected
        ${'1'}    | ${'0'}   | ${'0'}
        ${'1'}    | ${'1'}   | ${'1'}
        ${'1'}    | ${'2'}   | ${'2'}
        ${'3'}    | ${'2'}   | ${'6'}
        ${'12'}   | ${'12'}  | ${'144'}
        ${'1444'}  | ${'1444'} | ${'2085136'}
    `('multiplies $a x $b', ({ a, b, expected }) => {
        expect(multiply(a, b)).toEqual(expected);
    });

    it('multiplies problem input correctly', () => {
        const { X, Y } = require('../inputs/karatsuba');
        expected = String(BigInt(X) * BigInt(Y));

        expect(multiply(X, Y)).toEqual(expected);
    });
});
