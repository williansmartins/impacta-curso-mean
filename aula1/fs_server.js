var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
	fs.readFile(__dirname + '/index.html', function (erro, html) {
		response.writeHeader(200, { 'Content-Type': 'text/html' });
		response.write(html);
		response.end();
	});
});

server.listen(4000, function () {
	console.log('Executando Site Pessoal');
});
