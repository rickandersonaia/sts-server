const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const User = require('../models/users');
const passport = require('passport');
const authenticate = require('../authenticate');

const adminUserRouter = express.Router();

adminUserRouter.use(bodyParser.json());

adminUserRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        User.find(req.query)
            .then((users) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(users);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
; // end adminUserRouter users/

adminUserRouter.route('/new')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.send('Howdy');
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        User.register(new User({username: req.body.username}),
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
                    });
                }
            });
    })
; // end adminUserRouter users/new

adminUserRouter.route('/:userId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        User.findById(req.params.userId)
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /users/' + req.params.userId);
    })

    .delete(cors.corsWithOptions, (req, res, next) => {
        User.findByIdAndRemove(req.params.userId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
; // end adminUserRouter users/:userId

adminUserRouter.route('/edit/:userId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        User.findById(req.params.userId)
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /users/edit/' + req.params.userId);
    })
    .put(cors.corsWithOptions, (req, res, next) => {
        User.findByIdAndUpdate(req.params.userId, {
            $set: req.body
        }, {new: true})
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        User.findByIdAndRemove(req.params.userId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
; // end adminUserRouter users/edit/:userId



module.exports = adminUserRouter;