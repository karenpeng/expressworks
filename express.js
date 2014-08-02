var express = require('express');
var app = express();

var server = app.listen(process.argv[2]);

app.set('views', process.argv[3]);
app.set('view engine', 'jade');

/*
app.get('/home', function (req, res) {
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

/*
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
*/

/*
var stylus = require('stylus');

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
*/

/*
app.put('/message/:id', function (req, res) {
  var id = req.params.id
  var result = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.end(result)
});
*/

/*
app.get('/search', function (req, res) {
  var data = req.query;
  //console.log(data)
  //var data = JSON.stringify(str);
  res.send(data);
});
*/

var fs = require('fs');
var obj;
fs.readFile(process.argv[3], function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);

});
app.get('/books', function (req, res) {
  res.json(obj);
});