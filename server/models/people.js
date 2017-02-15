var mongoose = require('mongoose');
var PeopleSchema = new mongoose.Schema({
    name: {type: String, require: true, minlength: 2}}, {timestamps: true}
);

var People = mongoose.model('People', PeopleSchema);
