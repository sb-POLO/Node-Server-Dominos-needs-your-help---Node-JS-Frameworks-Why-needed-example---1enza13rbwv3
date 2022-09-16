var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url === '/welcome'){
    res.writeHead(200,{
      'Content-Type': 'text/plain'
    });
    res.end('Welcome to Dominos!');
  }
  if(res.url === '/contact'){
    res.writeHead(200,{
      'Content-Type': 'application/json';
    });
    res.end({
       phone: '18602100000',
       email: 'guestcaredominos@jublfood.com'
    });
  }
}

httpServer.listen(8081);

module.exports = httpServer;
