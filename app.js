var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require ('express-session');
var FileStore = require ('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var config = require('./config');

const assert = require('assert');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// mongoose.set('debug', true);

var index = require('./routes/index');
// var studentRouter = require('./routes/studentRouter');
var tutorRouter = require('./routes/tutorRouter');
var adminUserRouter = require('./routes/adminUserRouter');
var adminWordRouter = require('./routes/adminWordRouter');

const Words = require('./models/words');
const Users = require('./models/users');
const Students = require('./models/students');
// const LearninSteps = require('./models/learning-steps');
const LearninPaths = require('./models/learning-paths');

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
    useMongoClient: true
});

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => {
    console.log(err)
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());


// app.use('/student', studentRouter);
app.use('/tutor', tutorRouter);
app.use('/admin/users', adminUserRouter);
app.use('/admin/words', adminWordRouter);
app.use('/', index);
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, "public/index.html"))
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
    console.log(err);
});

module.exports = app;
