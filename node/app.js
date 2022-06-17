var http=require('http');

var os= require('os');

var hostname = os.hostname();

http.createServer(function(req,res){

    
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end("Swarm service (node App), hostname="+hostname);
}).listen(8085);

console.log("Node App, port 8085, hostname="+ hostname);
