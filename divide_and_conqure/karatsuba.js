module.exports = {
    multiply,
};

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
    const result = BigInt(10 ** x.length) * ac + BigInt(10 ** b.length) * adbc + bd;
    return result.toString();
}
