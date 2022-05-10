const fs = require('fs');

const directorio = process.argv[2];
const extension = process.argv[3];

fs.readdir(directorio, (err, list) => {
    if(err){
        return console.log(err)
    }
    list.forEach(function(file){
        if(file.endsWith("."+extension)){
            console.log(file);
        }
    });
});