const fs = require('fs');



module.exports = (dirname, ext, callback) => {
    fs.readdir(dirname, (err, list) => {
        if(err){
            return callback(err);
        }
        const result = [];
        list.forEach(function(file){
            if(file.endsWith("."+ext)){
                result.push(file);
            }
        });
        callback(null, result)
        });
}