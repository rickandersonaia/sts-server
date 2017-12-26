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

const assert = require('assert');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//mongoose.set('debug', true);

var index = require('./routes/index');
var userRouter = require('./routes/userRouter');
var wordRouter = require('./routes/wordRouter');

const Words = require('./models/words');
const Users = require('./models/users');

const url = "mongodb://heroku_wcrrgthx:q34lkmc0geis4inhdohsgd95r3@ds163826.mlab.com:63826/heroku_wcrrgthx";
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
//app.use(cookieParser('Meany-Lodge'));
app.use(session({
    name: 'session-id',
    secret: 'Meany-Lodge',
    saveUninitialized: false,
    resave: false,
    store : new FileStore({path : '../sessions'})
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);

function auth (req, res, next) {
    console.log(req.user);

    if (!req.user) {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        next(err);
    }
    else {
        next();
    }
}

app.use(auth);

app.use('/users', userRouter);
app.use('/words', wordRouter);


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
});

module.exports = app;
