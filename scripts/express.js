

//package-lock file is all the stuff that express needs to work
//node modules are where we save all the other little toold for node to do its job

var express = require('express');

//abstract how diff platforms find the path...are u on windows or mac? etc
var path = require('path');

var bodyParser = require('body-parser');

const app = express();
var nunjucks = require('nunjucks');
//tell u what folder u want it in -templates (ctrl + space - shows u what u can do with an object)
nunjucks.configure('templates', {
  autoescape: true, //dont need to add ending tags in html
  express: app//tells nunjucks about express
})
//turn it on

//tell express about nunjucks
app.set('view engine', 'nunjucks');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

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



//route takes in the pattern = '/' then we chain it
// app.route('/')
//   .get((rq, rs) => {

//   })
//   .post((rq, rs) => {
    
//   })
//   .put()
//   .delete();

// app.get(/[a-z]/, (req, res) => {
//   console.log(req.url);
//   // res.sendFile(path.join(__dirname, '../templates', req.url, '.html'));
// });

// app.get('/contact/:banana', (req, res) => {
//   if (req.params && req.params.banana) {
//     // path.join(__dirname, '../templates/contact.minion.html');
//     console.log(req.params);
//     res.end();
//   } else {
//     path.join(__dirname, '../templates/contact.html');
//   }
// })


// app.get('/');
// app.post('/');
// app.put('/');
// app.delete('/');





// app.get('/:banana/:potato/:onion', (req, res) => {
//   res.render('indexnew', {minion: req.params.banana});
// });

app.route('/contact')
  .get((req, res) => {
    res.render('contact');
  })
  .post((req, res) => {
    console.log(req.body);
    res.render('indexnew', {
      minion: req.body.pname, 
      min2: req.body.sname
    });
    // res.end();
  });

//need listener
app.listen(5050);

//need to put the require on the index.js file


