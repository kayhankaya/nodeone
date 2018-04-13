var user = require('../models/users');
var msj = require('../models/contact');
var book = require('../models/gbooks');

module.exports.index = function (req, res) {
    res.render('home');
};

module.exports.login = function (req, res) {
    res.render('login');
};

module.exports.loginpost = function (req, res, next) {
    if (req.body.email && req.body.password) {
        user.authenticate(req.body.email, req.body.password, function (error, user) {
            if (error || !user) {
                res.render('login', {
                    note: 'Wrong email or password.'
                });
            } else {
                console.log(user);
                req.session.userId = user.id;
                req.session.save();
                return res.redirect('/admin');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
    ;
};

module.exports.signup = function (req, res) {
    res.render('signup');
};

module.exports.signuppost = function (req, res) {
    res.render('signup');
    var newuser = new user({
        name: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        pass: req.body.password
    });

    newuser.save(function (err) {
        if (err) {
            console.log('hata:' + err);
        } else {
            console.log('kullanıcı eklendi.');
        }
    });
};

module.exports.contactme = function (req, res) {
    res.render('contactme')
};

module.exports.submit = function (req, res) {
    res.render('contactme');
    var newmessage = new msj({
        name: req.body.cname,
        email: req.body.cemail,
        title: req.body.ctitle,
        messages: req.body.cmessage
    });

    newmessage.save(function (err) {
        if (err) {
            console.log('hata:' + err);
        } else {
            console.log('mesaj eklendi.');
        }
    });
};

module.exports.guestbook = function (req, res) {
    book.find({confirm: true}, function (err, results) {
        res.render('guestbook', {books: results});
    });
};

module.exports.gbookadd = function (req, res) {
    var newgbookmessage = new book({
        name: req.body.gname,
        email: req.body.gemail,
        subject: req.body.gsubject,
        messages: req.body.gmessage,
        confirm: 0
    });
    newgbookmessage.save(function (err) {
        if (err) {
            console.log('hata:' + err);
        } else {
            console.log('gbook eklendi.');
        }
    });
    book.find({confirm: true}, function (err, results) {
        res.render('guestbook', {books: results});
    });
};


