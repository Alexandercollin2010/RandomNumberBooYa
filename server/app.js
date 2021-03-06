var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var port = process.env.PORT || 3000;

var maxRange = [];
var playerGuess = [];
var winningNum = [];

app.use(bodyParser.json());

app.listen(port, function(req, res){
  console.log('server listening on', port);
}); // end spin up server

// base url
app.get ('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
}); // end base url

//send winningNum to client side for comparison
app.get('/winningNum', function(req, res){
  console.log('test winningNum');
  res.send(winningNum);
  winningNum.length = 0;
});

// receiving the max range from the client.
app.post('/testPost', urlEncodedParser, function (req, res){
  console.log('testPost url hit, req.body:', req.body);
  //var min = 1;
  var max = Number(req.body.val);
  //function randomIzer is not functional
  function randomIzer(){
    return Math.floor((Math.random()* max) + 1);
}

  var randomReturn = {
    yes: 'In the test post'
  };
  res.send(randomReturn);
  maxRange.push(req.body);

  winningNum.push(randomIzer());
  console.log(winningNum);
});

// receiving the player guesses from the client.
  app.post('/playerGuesses', urlEncodedParser, function (req, res){
    console.log('testPost url hit, req.body:', req.body);

    playerGuess.push(req.body);
    console.log(playerGuess);
    var randomReturn = {
      yes: 'In the playerGuesses'
    };
    res.send(randomReturn);
  });




app.use (express.static('public'));
