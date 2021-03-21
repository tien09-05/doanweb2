var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var methodOverride = require('method-override')
var app = express();
var db = require('./config/db')
var route = require('./src/routes')
// Connect to db
db.connect()

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'))

app.use(express.static("public"))

app.engine('handlebars', exphbs(
    {
        helpers: {
            sum: (a, b) => a + b,
        }
    }
));
app.set('view engine', 'handlebars');

// Route init
route(app);

app.listen(3000);