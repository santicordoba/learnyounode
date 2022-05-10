const myModule = require('./mymodule');

const dirname = process.argv[2];
const ext = process.argv[3];

myModule(dirname, ext, (err, data) => {
    if(err){
        console.log(err);
    }
    data.forEach(function(file){
            console.log(file);
    });
})