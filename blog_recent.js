var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
  if (req.url == '/') {
    fs.readFile('./titles.json', function(err,data) {
      if (err) {
        console.error(err);
        res.end('Server Error');
      } else {
        var titles = JSON.parse(data.toString());
        fs.readFile('./template.html', function(err, data) {
          if (err) {
            console.error(err);
            res.end('Server Error 2');
          } else {
            var tmpl = data.toString();
            var html = tmpl.replace('%', titles.join('</li><li>'));
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(html);
          }
        });
      }
    });
  }
}).listen(8080, "127.0.0.1");