var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    Name: { type: String },
    Email: { type: String },
    Mobile: { type: String },
    Pass: { type: String },
});

module.exports = mongoose.model('UserCollection', obj);