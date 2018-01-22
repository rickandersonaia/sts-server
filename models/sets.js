var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var Set = new Schema({

        name: {
            type: String,
            required: false,
            unique: false,
        },
        studentId: {
            type: String,
            required: false,
            unique: false
        },
        parentId: {
            type: String,
            required: false,
            unique: false,
        }
    },
    {
        timestamps: true
    }
);

Set.plugin(passportLocalMongoose);

module.exports = mongoose.model('Set', Set);