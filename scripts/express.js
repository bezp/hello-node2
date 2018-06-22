

//package-lock file is all the stuff that express needs to work
//node modules are where we save all the other little toold for node to do its job

var express = require('express');

//abstract how diff platforms find the path...are u on windows or mac? etc
var path = require('path');

//turn it on
const app = express();

//we want a server what do we need? protocol - express already knows
//need a handler

//dont want to GET info, we want to USE info
// app.use(express.static('images'));
// app.use(express.static('styles'));
app.use(express.static('images'));
app.use(express.static('styles'));
app.use(express.static('scripts'));


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../templates/index.html'));
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, '../templates/contact.html'));
// });



// app.use(express.static('styles'));

//route takes in the pattern = '/' then we chain it
// app.route('/')
//   .get((rq, rs) => {

//   })
//   .post((rq, rs) => {
    
//   })
//   .put()
//   .delete();

app.get(/[a-z]/, (req, res) => {
  res.sendFile(path.join(__dirname, '../templates', req.url, '.html'));
});


// app.get('/');
// app.post('/');
// app.put('/');
// app.delete('/');

//need listener
app.listen(5050);

//need to put the require on the index.js file


