const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const User = require('../models/users')
const Set = require('../models/sets');
const Student = require('../models/students')
const passport = require('passport');
const authenticate = require('../authenticate');

const tutorRouter = express.Router();

tutorRouter.use(bodyParser.json());

tutorRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        User.find(req.query)
            .then((users) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(users);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
; // end tutorRouter tutor/

tutorRouter.route('/:userId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        if (req.params.userId == req.user._id) {
            User.findById(req.params.userId)
                .then((user) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(user);
                }, (err) => next(err))
                .catch((err) => next(err));
        } else {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false, message: 'Not authorized'});
            res.end();
        }

    })
; // end tutorRouter tutor/

tutorRouter.route('/edit/:userId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        if (req.params.userId == req.user._id) {
            User.findById(req.params.userId)
                .then((user) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(user);
                }, (err) => next(err))
                .catch((err) => next(err));
        } else {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false, message: 'Not authorized'});
            res.end();
        }

    })
    .post(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /users/edit/' + req.params.userId);
    })
    .put(authenticate.verifyUser, cors.corsWithOptions, (req, res, next) => {
        if (req.params.userId == req.user._id) {
            console.log('they are the same')
            User.findByIdAndUpdate(req.params.userId, {
                $set: req.body
            }, {new: true})
                .then((user) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(user);
                }, (err) => next(err))
                .catch((err) => next(err));
        } else {
            console.log('they are not the same');
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false, message: 'Not authorized'});

        }

    })
; // end tutorRouter tutor/edit/:userId

tutorRouter.route('/students/new')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
    })
    .post(authenticate.verifyUser, cors.corsWithOptions, (req, res, next) => {
        console.log(req.body);
        Student.create(req.body)
            .then((student) => {
                console.log('Student created ', student);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(student);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
; // end tutorRouter tutor/:userId/students/new

tutorRouter.route('/students/:studentId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        Student.findById(req.params.studentId)
            .then((student) => {
                if (student.parentId == req.user._id || true == req.user.isAdmin) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(student);
                } else {
                    res.statusCode = 401;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: false, message: 'Not authorized'});
                    res.end();
                }

            }, (err) => next(err))
            .catch((err) => next(err));

    })
; // end tutorRouter tutor/:parentId/students

tutorRouter.route('/students/edit/:studentId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        Student.findById(req.params.studentId)
            .then((student) => {
                if (student.parentId == req.user._id || true == req.user.isAdmin) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(student);
                } else {
                    res.statusCode = 401;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: false, message: 'Not authorized'});
                    res.end();
                }

            }, (err) => next(err))
            .catch((err) => next(err));

    })

    // findByIdAndUpdate(id, update: values, options, callback) http://mongoosejs.com/docs/api.html#Query
    .put(authenticate.verifyUser, cors.corsWithOptions, (req, res, next) => {

        // first verify that the student actually belongs to the current user before updating
        Student.findById(req.params.studentId)
            .then((student) => {
                this.parentId = student.parentId;
                this.student = student;

                // if the student belongs to the current authenticated user
                if (this.parentId == req.user._id || true == req.user.isAdmin) {
                    Student.findByIdAndUpdate(
                        req.params.studentId, // id
                        {$set: req.body}, // sets the update values
                        {new: true} // options - new = return updated document
                    )
                        .then((student) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(student);
                        }, (err) => next(err))
                        .catch((err) => next(err));
                } else {
                    console.log('they are not the same');
                    res.statusCode = 401;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: false, message: 'Not authorized'});

                }
            });

    })

    .delete(authenticate.verifyUser, cors.corsWithOptions, (req, res, next) => {

        // first verify that the student actually belongs to the current user before deleting
        Student.findById(req.params.studentId)
            .then((student) => {
                this.parentId = student.parentId;
                this.student = student;
                // if the student belongs to the current authenticated user
                if (this.parentId == req.user._id || true == req.user.isAdmin) {
                    Student.findByIdAndRemove(req.params.studentId)
                        .then((resp) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(resp);
                        }, (err) => next(err))
                        .catch((err) => next(err));
                } else {
                    console.log('they are not the same');
                    res.statusCode = 401;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: false, message: 'Not authorized'});

                }
            });

    })
; // end tutorRouter tutor/students/edit/:studentId

tutorRouter.route('/:parentId/students')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        if (req.params.parentId == req.user._id || true == req.user.isAdmin) {
            Student.find({parentId: req.params.parentId})
                .then((students) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(students);
                }, (err) => next(err))
                .catch((err) => next(err));
        }
    })
; // end tutorRouter tutor/:parentId/students


module.exports = tutorRouter;