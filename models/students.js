var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var Student = new Schema({

        displayName: {
            type: String,
            required: true,
            unique: false,
        },
        avatar: {
            type: String,
            required: false,
            unique: false
        },
        parentId: {
            type: String,
            required: true,
            unique: false,
        },
        learningPathId: {
            type: String,
            required: false,
            unique: false,
        },
        progress: [{words: [{
                wordId: String,
                preMastery: Object, // dates of success
                mastery: Object, // dates of mastery
                hasMastered: Boolean  // based on rules of mastery
            }]
        }]
    },
    {
        timestamps: true
    }
);

Student.plugin(passportLocalMongoose);

module.exports = mongoose.model('Student', Student);