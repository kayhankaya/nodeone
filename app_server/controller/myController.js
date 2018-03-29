
module.exports.index = function (req, res) {
    res.render('home')
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