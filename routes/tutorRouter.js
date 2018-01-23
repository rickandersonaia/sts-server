const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const User = require('../models/users')
const Words = require('../models/words')
const LearningStep = require('../models/learning-steps');
const Student = require('../models/students');
const LearningPath = require('../models/learning-paths');
const passport = require('passport');
const authenticate = require('../authenticate');

const tutorRouter = express.Router();

tutorRouter.use(bodyParser.json());


// **** Tutor User Routes *****

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

// **** Student Routes *****

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

// **** Tutor Word Routes *****

tutorRouter.route('/words')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        Words.find(req.query)
            .then((words) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(words);
            }, (err) => next(err))
            .catch((err) => next(err))
    })
; // end tutorRouter tutor/words/

tutorRouter.route('/words/:wordId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        Words.findById(req.params.wordId)
            .then((word) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(word);
            }, (err) => next(err))
            .catch((err) => next(err));

    })
; // end tutorRouter tutor/words/:wordId

tutorRouter.route('/:userId/words')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        Words.find()
            .where('cardset').in(req.user.setsPurchased)
            .then((words) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(words);
            }, (err) => next(err))
            .catch((err) => next(err));

    })
; // end tutorRouter tutor/:tutorId/words/


tutorRouter.route('/:userId/word-ids')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        Words.find()
            .where('cardset').in(req.user.setsPurchased)
            .select('_id')
            .then((words) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(words);
            }, (err) => next(err))
            .catch((err) => next(err));

    })
; // end tutorRouter tutor/:tutorId/word-ids/




// **** Learning Paths Routes *****

tutorRouter.route('/learning-paths/new')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
    })
    .post(authenticate.verifyUser, cors.corsWithOptions, (req, res, next) => {
        console.log(req.body);
        LearningPath.create(req.body)
            .then((learningPath) => {
                console.log('Learning Path created ', learningPath);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(learningPath);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
; // end tutorRouter tutor/learning-path/new

tutorRouter.route('/:parentId/learning-paths')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        if (req.params.parentId == req.user._id || true == req.user.isAdmin) {
            LearningPath.find({parentId: req.params.parentId})
                .then((learningPath) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(learningPath);
                }, (err) => next(err))
                .catch((err) => next(err));
        }
    })
; // end tutorRouter tutor/:parentId/learning-paths


tutorRouter.route('/learning-paths/edit/:learningPathId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        LearningPath.findById(req.params.learningPathId)
            .then((learningPath) => {
                if (learningPath.parentId == req.user._id || true == req.user.isAdmin) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(learningPath);
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
        LearningPath.findById(req.params.learningPathId)
            .then((learningPath) => {
                this.parentId = learningPath.parentId;
                this.learningPath = learningPath;

                // if the student belongs to the current authenticated user
                if (this.parentId == req.user._id || true == req.user.isAdmin) {
                    LearningPath.findByIdAndUpdate(
                        req.params.learningPathId, // id
                        {$set: req.body}, // sets the update values
                        {new: true} // options - new = return updated document
                    )
                        .then((learningPath) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(learningPath);
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
        LearningPath.findById(req.params.learningPathId)
            .then((learningPath) => {
                this.parentId = learningPath.parentId;
                this.learningPath = learningPath;
                // if the student belongs to the current authenticated user
                if (this.parentId == req.user._id || true == req.user.isAdmin) {
                    LearningPath.findByIdAndRemove(req.params.learningPathId)
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
; // end tutorRouter tutor/learning-paths/edit/:learningPathId

// **** Learning Steps Routes *****

tutorRouter.route('/learning-steps/new')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
    })
    .post(authenticate.verifyUser, cors.corsWithOptions, (req, res, next) => {
        console.log(req.body);
        LearningStep.create(req.body)
            .then((learningStep) => {
                console.log('Learning Path created ', learningStep);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(learningStep);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
; // end tutorRouter tutor/learning-steps/new

tutorRouter.route('/:parentId/learning-steps')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        if (req.params.parentId == req.user._id || true == req.user.isAdmin) {
            LearningStep.find({parentId: req.params.parentId})
                .then((learningStep) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(learningStep);
                }, (err) => next(err))
                .catch((err) => next(err));
        }
    })
; // end tutorRouter tutor/:parentId/learning-steps


tutorRouter.route('/learning-steps/edit/:learningStepId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(authenticate.verifyUser, cors.cors, (req, res, next) => {
        LearningStep.findById(req.params.learningStepId)
            .then((learningStep) => {
                if (learningStep.parentId == req.user._id || true == req.user.isAdmin) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(learningStep);
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
        LearningStep.findById(req.params.learningStepId)
            .then((learningStep) => {
                this.parentId = learningStep.parentId;
                this.learningStep = learningStep;

                // if the student belongs to the current authenticated user
                if (this.parentId == req.user._id || true == req.user.isAdmin) {
                    LearningStep.findByIdAndUpdate(
                        req.params.learningStepId, // id
                        {$set: req.body}, // sets the update values
                        {new: true} // options - new = return updated document
                    )
                        .then((learningStep) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(learningStep);
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
        LearningStep.findById(req.params.learningStepId)
            .then((learningStep) => {
                this.parentId = learningStep.parentId;
                this.learningStep = learningStep;
                // if the student belongs to the current authenticated user
                if (this.parentId == req.user._id || true == req.user.isAdmin) {
                    LearningStep.findByIdAndRemove(req.params.learningStepId)
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
; // end tutorRouter tutor/learning-steps/edit/:learningStepId

module.exports = tutorRouter;