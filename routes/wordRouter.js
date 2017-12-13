const express = require('express');
const bodyParser = require('body-parser');

const wordRouter = express.Router();

wordRouter.use(bodyParser.json());

wordRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end('Will send all the wordes to you!');
    })

    .post((req, res, next) => {
        res.end('Will add the word: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /wordes');
    })

    .delete((req, res, next) => {
        res.end('Deleting all wordes');
    })
;

module.exports = wordRouter;