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
        }
    },
    {
        timestamps: true
    }
);

Student.plugin(passportLocalMongoose);

module.exports = mongoose.model('Student', Student);