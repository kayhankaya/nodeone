var user = require('../models/users');
var book = require('../models/gbooks');

module.exports.admin = function (req, res, next) {
    console.log(req.session);
    user.find(function (err, results) {
        user.findById(req.session.userId)
            .exec(function (error, user) {
                if (error) {
                    return next(error);
                } else {
                    if (user === null) {
                        var err = new Error('Not authorized! Go back!');
                        err.status = 400;
                        return next(err);
                    } else {
                        return res.render('admin',{users: results});
                    }
                }
            });
    });
};

module.exports.logout = function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
};

module.exports.gbook = function (req, res) {
    book.find(function (err, results) {
        res.render('./adminpages/admgbook', {books: results});
    });
};

module.exports.gbookconf = function (req, res) {
    book.updateOne({_id: req.params.id},
        {
            $set: {
                confirm: 1
            }
        }, function (err) {
            if (err) {
                console.log('confirm hata')
            }
            res.redirect('/admin/gbook')
        });
};

module.exports.admuser = function (req, res) {
    user.find(function (err, results) {
        res.render('./adminpages/admuser', {users: results});
    });
};

module.exports.deluser = function (req, res) {
    user.deleteOne({email: req.params.email}, function (err) {
        if (err) {
            console.log('sil hata')
        }
        res.redirect('/admin/user')
    });
};

module.exports.useredit = function (req, res) {
    user.updateOne({_id: req.params.id},
        {
            $set: {
                name: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                pass: req.body.password
            }
        }, function (err) {
            if (err) {
                console.log('user edit hata')
            }
            res.redirect('/admin/user')
        });
};