var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./app/routes/index');
var tracks = require('./app/routes/tracks');

var port = 1234;

var app = express();

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//static folder
app.use(express.static(path.join(__dirname, 'client')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./app/routes/router.js')(app);

app.listen(port, ()=>console.log("Server started on port"+port));
