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

/*
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
*/


/*
var stylus = require('stylus');

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));
*/

//ok, i give up
/*
app.put(process.argv[3], function(req, res){
  req.params.NAME
});
*/

/*
app.get('/search',function(req, res){
  var data = JSON.stringify(req.query);
  res.send(data);
});
*/

/*
var fs = require('fs');
fs.readFile(process.argv[3], function(err, data){
	if(err) throw err;
	var obj = JSON.parse(data);
	var content = res.json(obj);
	res.send(content);
});
*/