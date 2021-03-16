var http = require('http');
var requisicao = function (request, response) {
	response.writeHead(400, { "Content-Type": "text/html" });
	response.write("<h1>400 BARABIM BARABUM!!</h1>");
	response.end();
}

var server = http.createServer(requisicao);

var resultado = function () {
	console.log('Servidor em funcionamento!');
}
server.listen(4000, resultado);