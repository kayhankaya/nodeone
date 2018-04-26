var user = require('../models/users');
var book = require('../models/gbooks');

module.exports.admin = function (req, res, next) {
    console.log('session user:' + req.session.userId);
    user.find(function (err, results1) {
        book.find(function (err, results2) {
            user.findById(req.session.userId)
                .exec(function (error, user) {
                    if (error) {
                        return next(error);
                    } else {
                        if (user === null) {
                            res.render('nopage');
                            return next(err);
                        } else {
                            return res.render('./adminpages/admin',
                                {users: results1, books: results2});
                        }
                    }
                });
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
            res.redirect('/admin#gbook')
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
        res.redirect('/admin')
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
            res.redirect('/admin')
        });
};