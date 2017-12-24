const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const Words = require('../models/words');

const wordRouter = express.Router();

wordRouter.use(bodyParser.json());

wordRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors,(req, res, next) => {
        Words.find(req.query)
            .then((words) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(words);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
; // end wordRouter words/

wordRouter.route('/new')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors,(req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.send('Howdy');
    })
    .post(cors.corsWithOptions,(req, res, next) => {
        Words.create(req.body)
            .then((word) =>{
                console.log('Word created ', word);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(word);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
; // end wordRouter words/

wordRouter.route('/:wordId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors,(req, res, next) => {
        Words.findById(req.params.wordId)
            .then((word) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(word);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions,(req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /words/'+ req.params.wordId);
    })

    .delete(cors.corsWithOptions, (req, res, next) => {
        Words.findByIdAndRemove(req.params.wordId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
; // end wordRouter words/

wordRouter.route('/edit/:wordId')
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    .get(cors.cors, (req, res, next) => {
        Words.findById(req.params.wordId)
            .then((word) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(word);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /words/edit/'+ req.params.wordId);
    })
    .put(cors.corsWithOptions, (req, res, next) => {
        Words.findByIdAndUpdate(req.params.wordId, {
            $set: req.body
        }, { new: true })
            .then((word) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(word);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        Words.findByIdAndRemove(req.params.wordId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
; // end wordRouter words/


module.exports = wordRouter;