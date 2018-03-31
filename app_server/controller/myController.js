var user = require('../models/users');

module.exports.index = function (req, res) {
    res.render('home')
};

module.exports.admin = function (req, res) {
    res.render('admin')
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

module.exports.deluser = function (req,res) {
    user.findOneAndRemove({email:req.params.email},function (err) {
        if(err){
            console.log('sil hata')
        }
        res.redirect('/admin')
    });
};