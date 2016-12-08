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

  var randomReturn = {
    yes: 'In the test post'
  };

  res.send(randomReturn);
  maxRange.push(req.body);
});


app.use (express.static('public'));
