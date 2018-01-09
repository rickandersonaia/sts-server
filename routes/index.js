var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const User = require('../models/users');
var passport = require('passport');
var authenticate = require('../authenticate');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', cors.corsWithOptions, (req, res, next) => {
    User.register(new User({
            username: req.body.username,
            email: req.body.email,
            displayName: req.body.displayName,
            avatar: req.body.avatar,
            isTutor: req.body.isTutor
        }),
        req.body.password, (err, user) => {
            if(err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: err});
            }
            else {
                passport.authenticate('local')(req, res, () => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: true, status: 'Registration Successful!'});
                    res.redirect('/');
                });
            }
        });
});

router.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200); } )

router.post('/login', cors.corsWithOptions, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err){ return next(err);}

        req.logIn(user, (err) => {
            if(err){ return next(err)}
            var token = authenticate.getToken({_id: req.user._id});
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true, token: token, status: 'You are successfully logged in!'});
        })
    }) (req, res, next);
});


router.get('/logout', cors.corsWithOptions, (req, res) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    }
    else {
        var err = new Error('You are not logged in!');
        err.status = 403;
        next(err);
    }
});

router.get('/checkJWTToken', cors.corsWithOptions, (req, res) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if (err)
            return next(err);

        if (!user) {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            return res.json({status: 'JWT invalid!', success: false, err: info});
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            return res.json({status: 'JWT valid!', success: true, user: user});

        }
    }) (req, res);
});

module.exports = router;
