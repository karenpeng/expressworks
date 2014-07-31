var express = require('express');
var app = express();

var server = app.listen(process.argv[2]);

app.set('views', process.argv[3]);
app.set('view engine', 'jade');

/*
app.get('/home', function(req, res){
	res.end('Hello World!');
})
*/

/*
app.get('/home',function(req, res){
	res.render('index', {date: new Date().toDateString()});
});
*/

/*
var connect = require('connect');
app.use(connect.urlencoded());
app.post('/form', function(req, res){
  var result = req.body.str.split('').reverse().join('');
  //console.log(result);
  res.end(result)
})
*/