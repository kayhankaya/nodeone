var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
    name: {type: String, required: true},
    subject: {type: String, required: true},
    email: {type: String, required: true},
    messages: {type: String, required: true},
    confirm: Boolean
});

var book = mongoose.model('books', booksSchema);

module.exports = book;