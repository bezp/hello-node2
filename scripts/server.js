//
//
//
//

var http = require('http');
var fs = require('fs'); //fs = file system- a utility that lets server read stuff on our machine
//now need to change http handler to service it...line 18+

//our server needs to handle requests with a HANDLER

var httpHandler = (request, response) => {
  //handler needs to do what... take request - do something - send response back
  // response.end('hello nooooooooooooooooooode');
  //right now its saying no matter the req, this is the response but we dont always want it to be hello noode...

  //so now we want to server files
//  var fileSync = fs.readFileSync('templates/index.html');  //called the sync version
//  response.end(fileSync); //its as if we went into index.html and copy/pasted the code and passed it into response.end()
  //what we have now is synced... finish this file then do the next task... the more files i have, the more i need to wait
  //right now we just have a small amount... so most of the stuff we do will be async - instead of waiting for it to happen
  //we are going to give a call (gave waitor example)

  //async time (readFile gives back a 'promise' that x will be ready at 'xtime' )
  //so get a promise that a file will be served after a certain amount of time 
  fs.readFile('templates/indexx.html', (error, data) => {
    //this is an example of a CALLBACK function (if u call someone and get voice mail- hope they call u back)
    //callback func means that ik it takes some time, i will giv u some time/instruction to call me back
    //whenever ur done, do this...
    if (error) {
      console.log(error);
      response.end('we brok');
    }
    response.end(data);
  });
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

