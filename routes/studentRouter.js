const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const Student = require('../models/students');
const passport = require('passport');
const authenticate = require('../authenticate');

const studentRouter = express.Router();

studentRouter.use(bodyParser.json());




module.exports = studentRouter;