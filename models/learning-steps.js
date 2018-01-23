var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var LearningStep = new Schema({

        words: {
            type: Object, // wordIds
            required: false,
            unique: false,
        }
    },
    {
        timestamps: true
    }
);

LearningStep.plugin(passportLocalMongoose);

module.exports = mongoose.model('LearningStep', LearningStep);