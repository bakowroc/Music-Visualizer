const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = 1234

//views engine

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//set static folder

app.use(express.static(path.join(__dirname, 'client')));


//body parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./app/routes/router')(app)

app.listen(port, ()=>console.log('Server started on port ' + port));
