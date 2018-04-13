var express = require('express');
var path = require('path');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var data;
data = require("./app_server/models/db");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app_server/views'));
app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(ejsLayouts);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));

require('./app_server/routes/routeManager')(app);

app.listen(8000);