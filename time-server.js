const net = require('net');
const port = process.argv[2];

function addZero(valor){
    if(valor < 10){
        return "0"+valor;
    } else {
        return valor;
    }
}

const server = net.createServer(function (socket) {
    let date = new Date();
    let dateFinal = "";
    dateFinal = date.getFullYear()+
    "-"+
    addZero(date.getMonth()+1)+
    "-"+
    addZero(date.getDate())+
    " "+ 
    date.getHours()+":"+date.getMinutes()
    +"\n";

    socket.end(dateFinal);
});
server.listen(port);