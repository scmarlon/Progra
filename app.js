var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var tetsController = require('./controller/testController');
var autogenerateController = require('./controller/autogenerateController');
var generateController = require('./controller/generateController');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    next();
});

app.use('/test',tetsController);
app.use('/autogenerate',autogenerateController);
app.use('/generate',generateController);

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
        .json({ error: err.message });
});
module.exports = app;
