var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};
var serverPort = 8080;

// error function
function send404(response) {
  response.writeHead(404, {'Content-Type': 'text/html'});
  response.write('<h1>Error 404</h1><p>Resource not found</p>');
  response.end();
}

// function to serve content
function sendFile(response, filePath, fileContents) {
  response.writeHead(
    200,
    {'Content-Type': mime.lookup(path.basename(filePath))}
  );
  response.end(fileContents);
}

// function to serve static
function serveStatic(response, cache, absPath) {
  if (cache[absPath]) {
    sendFile(response, absPath, cache[absPath]);
    console.log("Sending file from cache: " + absPath);
  } else {
    fs.exists(absPath, function(exists) {
      if (exists) {
        fs.readFile(absPath, function(err, data) {
          if (err) {
            send404(resposne);
          } else {
            cache[absPath] = data;
            sendFile(response, absPath, data);
            console.log("Adding file [" + absPath + "] to cache, and sending");
          }
        });
      } else {
        send404(response);
      }
    });
  }    
}

var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = 'public/index.html';
  } else {
    filePath = 'public' + request.url;
  }
  var absPath = './' + filePath;
  serveStatic(response, cache, absPath);
});

server.listen(serverPort, function() {
  console.log("Server starting on port " + serverPort);
})

