var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    Name: { type: String },
    Pic: { type: String },
    Video: { type: String },
    Des: { type: String },
});

module.exports = mongoose.model('CourseCollection', obj);