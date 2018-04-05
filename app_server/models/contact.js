var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messagesSchema = new Schema({
    name: String,
    email: {type: String, required: true},
    title: String,
    messages: String
});

var msj = mongoose.model('contacts', messagesSchema);

module.exports = msj;