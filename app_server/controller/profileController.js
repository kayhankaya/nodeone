module.exports.profile = function (req, res) {
    console.log(req.test);
    res.render('profile');
};

module.exports.cv = function (req, res) {
    var cvDetail = ['Eğitim', 'Referans', 'Eğitim', 'Proje'];
    res.render('cv', {mesaj: 'Off cvye bak ya çok başarılı.', cvDetail: cvDetail});
};