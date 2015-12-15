var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(301,{Location: 'http://ec2-52-90-112-197.compute-1.amazonaws.com'});
  res.end();
}).listen(8887);
