var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.render('content');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.listen(3000);