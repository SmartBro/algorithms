const INPUT_X = '3141592653589793238462643383279502884197169399375105820974944592';
const INPUT_Y = '2718281828459045235360287471352662497757247093699959574966967627';

const split = (s) => {
    const half = Math.ceil(s.length / 2);
    return [
        s.substr(0, half),
        s.substr(half),
    ];
}

function multiply(x, y) {
    x = String(x);
    y = String(y);
    if (x.length === 1 || y.length === 1) {
        return BigInt(x) * BigInt(y);
    }
    const [ a, b ] = split(x);
    const [ c, d ] = split(y);
    const ac = multiply(a, c);
    const bd = multiply(b, d);
    const abcd = multiply(BigInt(a) + BigInt(b), BigInt(c) + BigInt(d));
    const adbc = abcd - ac - bd;
    const halfX = x.length = Math.ceil(x.length / 2);
    const halfY = x.length = Math.ceil(y.length / 2);
    return BigInt(10 ** x.length) * ac + BigInt(10 ** halfX) * adbc + bd;
}
// multiply('1234', '456');
console.log(multiply(INPUT_X, INPUT_Y), multiply(INPUT_Y, INPUT_X) == BigInt(INPUT_X) * BigInt(INPUT_Y));