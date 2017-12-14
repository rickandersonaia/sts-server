var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordsSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            required: false,
            unique: true,
        },
        sentence: {
            type: String,
            required: false,
            unique: true,
        },
        audio: {
            type: String,
            required: false,
            unique: true,
        },
        cardset: {
            type: Number,
            required: true,
            max: 3,
            min: 1,
        },
        isfree: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true
    }
);

var Words = mongoose.model('Word', wordsSchema);

module.exports = Words;