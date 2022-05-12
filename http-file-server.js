const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filename = process.argv[3];

const server = http.createServer(function callback(request,response){
    fs.createReadStream(filename).pipe(response);
});
server.listen(port);