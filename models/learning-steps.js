var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var LearningStep = new Schema({

        name: {
            type: String,
            required: false,
            unique: false,
        },
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