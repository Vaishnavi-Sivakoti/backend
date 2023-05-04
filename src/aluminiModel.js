//model contains the required schema for alumini
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aluminiSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    aluminiId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('alumini', aluminiSchema);