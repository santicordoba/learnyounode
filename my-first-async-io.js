const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf-8', (err, file) => {
    if(err){
        return console.log(err)
    }
    const lines = file.split('\n').length -1;
    console.log(lines);
}) ;



