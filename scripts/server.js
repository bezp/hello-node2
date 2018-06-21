//
//
//
//

var http = require('http');

//our server needs to handle requests with a HANDLER

var httpHandler = (request, response) => {
  //handler needs to do what... take request - do something - send response back
  response.end('hello nooooooooooooooooooode');
  //right now its saying no matter the req, this is the response
}

//now that we hav handler what do we need?? -- a listener
//who listens...the server but we dont have it yet...

// we need to use the handler
var server = http.createServer(httpHandler);

//now that we have a server, we need a port and a listener
var port = 5005;
server.listen(port);

//to turn it on... npm start
//but we dont have index.html, etc... the server just serves up content...


//
//
//
//
//

