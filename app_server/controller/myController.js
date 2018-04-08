var user = require('../models/users');
var msj = require('../models/contact');
var book = require('../models/gbooks');

module.exports.index = function (req, res) {
    res.render('home');
};

module.exports.admin = function (req, res) {
    res.render('admin');
};

module.exports.xxx = function (req, res) {
    res.render('./adminpages/xxx');
};

module.exports.login = function (req, res) {
    res.render('login');
};

module.exports.loginpost = function (req, res) {
    console.log(req.body);
    res.render('login', {
        email: req.body.email,
        password: req.body.password
    });
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

module.exports.admin = function (req, res) {
    user.find(function (err, results) {
        res.render('admin', {users: results});
    });
};

module.exports.xxx = function (req, res) {
    book.find(function (err, results) {
        res.render('./adminpages/xxx', {books: results});
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
                console.log('hata')
            }
            res.redirect('/admin')
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
    res.render('guestbook')
};

module.exports.gbookadd = function (req, res) {
    res.render('guestbook');
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
};


