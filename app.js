var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var app = express();
var db = require('./config/db')
var route = require('./src/routes')
// Connect to db
db.connect()

app.use(express.static("public"))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Route init
route(app);

app.listen(3000);