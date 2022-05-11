const http = require('http');

//nuevo array a partir de la pos 2
const urls = process.argv.slice(2);

const httpRequest = (url) =>
    new Promise((resolve, rejected) => {
        http.get(url, function(request){
            let result = "";
            request.setEncoding('utf8');
            request.on('data', function(data){
                result += data;
            });
            request.on('end', function(){
                resolve(result);
            });
            request.on('err', function(err){
                rejected(err);
            })
        });
    });


// const results = [promise(urls[0], promise(urls[1]), promise(urls[2]))];

Promise.allSettled([
    httpRequest(urls[0]), 
    httpRequest(urls[1]),
     httpRequest(urls[2]),])
.then((results => results.forEach((result) => console.log(result.value))));