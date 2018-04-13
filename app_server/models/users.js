var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String,
    lastname: String,
    email: {type: String, required: true, unique: true},
    pass: {type: String, required: true}
});

usersSchema.statics.authenticate = function (email, password, callback) {
    user.findOne({ email: email })
        .exec(function (err, user) {
            if (err) {
                return callback(err);
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.pass, function (err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
};

//hashing a password before saving it to the database
usersSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.pass, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.pass = hash;
        next();
    })
});

var user = mongoose.model('users', usersSchema);

module.exports = user;