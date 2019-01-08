var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var routes = require('./routes');

var app = express();


var username = '';
// uncomment after placing your favicon
//app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// changes it to use the optimized version for production
app.use(express.static(path.join(__dirname, 'test-website')));
app.use('/', routes);
// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


module.exports = app;
