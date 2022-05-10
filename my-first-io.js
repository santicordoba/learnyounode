const fs = require('fs');

const fileName = process.argv[2];

const file = fs.readFileSync(fileName, 'utf-8');

const lines = file.split('\n').length -1;

console.log(lines);