const fs = require('fs');
const path = require('path');
const os = require('os');

function read(input, type = String) {
    try {
        const data = fs.readFileSync(path.resolve(__dirname, '../inputs/', input), 'utf-8');
        return data.split(os.EOL).map(type);
    } catch(err) {
        console.error(`Can't read file ${path}`, err);
    }
}

module.exports = read;
