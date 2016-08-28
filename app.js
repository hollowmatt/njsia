var http = require('http');
http.createServer(function(req,resp) {
  resp.writeHead(200, {'Content-Type': 'text/html'});
  resp.end('<h1>Hello</h1><p>How are you</p>');
}).listen( 8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');