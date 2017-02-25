var http = require('http');

var PORT1 = 7000;
var PORT1 = 7500;

//generic for handling requests
function handleRequest(request, response){
	response.end("It works on path " + request.url);
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server1.listen(PORT1, function(){
	console.log("Server is listening on http://localhost: %s", PORT1);
});

server2.listen(PORT1, function(){
	console.log("Server is listening on http://localhost: %s", PORT2);
});