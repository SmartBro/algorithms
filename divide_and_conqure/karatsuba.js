module.exports = {
    multiply,
};

const split = (s) => {
    const half = Math.ceil(s.length / 2);
    const left = s.substr(0, half);
    const right = s.substr(half).padStart(left.length, '0');

    return [
        left,
        right,
    ];
}

function multiply(x, y) {
    x = String(x);
    y = String(y);
    const n = Math.max(x.length, y.length);
    const m = Math.round(n / 2);
    x = x.padStart(n, '0');
    y = y.padStart(n, '0');
    if (x.length === 1 || y.length === 1) {
        return String(BigInt(x) * BigInt(y));
    }
    const [ a, b ] = split(x);
    const [ c, d ] = split(y);
    const p = BigInt(a) + BigInt(b);
    const q = BigInt(c) + BigInt(d);
    const ac = BigInt(multiply(a, c));
    const bd = BigInt(multiply(b, d));
    const pq = BigInt(multiply(p, q));
    const adbc = pq - ac - bd;
    const result = BigInt(10 ** (m * 2)) * ac + BigInt(10 ** m) * adbc + bd;
    return result.toString();
}
