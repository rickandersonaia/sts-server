var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var LearningPath = new Schema({

        pathName: {
            type: String,
            required: false,
            unique: false,
        },
        parentId: {
            type: String,
            required: false,
            unique: false,
        },
        learningSteps:[{
            stepName: String,
            words: [{
                wordId: String,
                wordName: String
            }]
        }]
    },
    {
        timestamps: true
    }
);

LearningPath.plugin(passportLocalMongoose);

module.exports = mongoose.model('LearningPath', LearningPath);