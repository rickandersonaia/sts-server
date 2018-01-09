var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
        email: {
            type: String,
            required: false,
            unique: false,
        },
        displayName: {
            type: String,
            required: false,
            unique: false,
        },
        avatar: {
            type: String,
            required: false,
            unique: false
        },
        isTutor: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        parentId: {
            type: String,
            required: false,
            unique: false,
        },
        setsPurchased: {
            type: Array,
            required: false,
            unique: false,
        }
    },
    {
        timestamps: true
    }
);

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);