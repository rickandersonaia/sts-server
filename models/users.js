var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
        username: {
            type: String,
            required: false,
            unique: true,
        },
        email: {
            type: String,
            required: false,
            unique: true,
        },
        password: {
            type: String,
            required: false,
            unique: false,
        },
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
        istutor: {
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
            unique: true,
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

var Users = mongoose.model('User', usersSchema);

module.exports = Users;