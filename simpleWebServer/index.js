var http = require('http')

var server= http.createServer(function(req,res) {
    res.writeHead(200,'Content-Type','text/plain');
    res.end("Hello World");
});
server.listen(3000,'localhost');
console.log(`Server is running at localhost:3000`);