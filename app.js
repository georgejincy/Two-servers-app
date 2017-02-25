var http = require('http');
var twitter = requier('twitter');

var PORT1 = 7000;
var PORT2 = 7500;

//generic for handling requests
function handleRequest(request, response){
	response.end("You are awesome ");

}
function handleRequest2(request, response){
	response.end("You are bad! ");
	
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){
	console.log("Server is listening on http://localhost: %s", PORT1);
});

server2.listen(PORT2, function(){
	console.log("Server is listening on http://localhost: %s", PORT2);
});