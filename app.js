var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = "mongodb://localhost:27017";
var collection = null;

var index = require('./routes/index');
var users = require('./routes/users');
var wordRouter = require('./routes/wordRouter');

var app = express();

MongoClient.connect(url, (err, client) =>{
    assert.equal(err, null);
    console.log('Connected correctly to the database server');
    const db = client.db('seetospell');
    collection = db.collection('words');

    collection.insertOne({"name": "bounce", "isfree": false, "set": "1"},
        (err, result) =>{
            assert.equal(err, null);
            console.log("After Insert");
            console.log(result.ops);

            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                console.log("Found");
                console.log(docs);

                db.dropCollection('words', (err, result) => {
                    assert.equal(err, null);
                    client.close();
                })
            })
        })
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/wordss', wordRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
