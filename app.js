var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function(req,resp) {
  resp.writeHead(200, {'Content-Type': 'text/json'});
  fs.createReadStream('./resource.json').pipe(resp);
  console.log(resp.statusCode);
});
server.listen( 8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');