const http = require('http');
const url = require('url');

const port = process.argv[2];
const path = process.argv[3];

function addZero(valor){
    if(valor < 10){
        return "0"+valor;
    } else {
        return valor;
    }
}

const routes = {
    "/api/parsetime": (parsedUrl) => {
        const date = new Date(parsedUrl.query.iso);
        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    },
    "/api/unixtime": (parsedUrl) => {
        const date = new Date(parsedUrl.query.iso);
        const miliseconds = date.getTime();
        return {
            unixtime: miliseconds,
        }
    }
}

const server = http.createServer(function callback(request,response){
    const parsedUrl = url.parse(request.url, true);
    const resource = routes[parsedUrl.pathname];

    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(resource(parsedUrl)));
});

server.listen(port);