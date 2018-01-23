var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var LearningPath = new Schema({

        name: {
            type: String,
            required: false,
            unique: false,
        },
        parentId: {
            type: String,
            required: false,
            unique: false,
        },
        learningSteps:{
            type: Object, // learningStep ids
        }
    },
    {
        timestamps: true
    }
);

LearningPath.plugin(passportLocalMongoose);

module.exports = mongoose.model('LearningPath', LearningPath);