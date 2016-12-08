var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var port = process.env.PORT || 3000;

var maxRange = [];

app.use(bodyParser.json());

app.listen(port, function(req, res){
  console.log('server listening on', port);
}); // end spin up server

// base url
app.get ('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
}); // end base url

//testPost
app.post('/testPost', urlEncodedParser, function (req, res){
  console.log('testPost url hit, req.body:', req.body);
  var min = 1;
  var max = req.body.val;
  //function randomIzer is not functional
  function randomIzer(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
  // var randomIzer = function(){
  //   parseInt(Math.random()*maxRange.val+1);
  }
  console.log('in var max:', max );
  var randomReturn = {
    yes: 'In the test post'
  };

  res.send(randomReturn);
  maxRange.push(req.body);
  console.log(maxRange);
});


app.use (express.static('public'));
