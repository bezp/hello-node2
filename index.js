
//have what starts the application b/c we need an entry point. when we used multiple js files on the browser we needed
// them on the right order. this is harder to do on the server b/c we cant really order them. no way to assure that
// to make it work, we use REQUIRE and EXPORTS ; 
//since index.js is entry point we need to tell it what to run... which is our scripts



// require('./scripts/server');


//we are telling index js, when run to get the other files
//need to let package.json know about it... we add a script -"start": "node index.js"- so we can just type npm start
//in this way, we can have one central command that does everything... 
//
//



//coming from express.js...
require('./scripts/express');