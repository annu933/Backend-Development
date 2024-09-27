<h1>Backend Development</h1>


<h6>Creat http Server</h6>

<!--syntax  -->
http.createServer([options][, requestListener])

const http = require('http');
const server = http.createServer(function(req,res){
    res.end("hello world")
});

server.listen(3000);
