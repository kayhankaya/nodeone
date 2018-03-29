var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,
    lastname: String,
    email: {type: String, required: true, unique: true},
    pass: {type: String, required: true}
});

var user = mongoose.model('users', usersSchema);

module.exports = user;