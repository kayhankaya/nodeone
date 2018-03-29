
var express = require('express');
var router = express.Router();
var myprofilcontroller = require('../controller/profileController');

router.use(function (req,res,next) {
    req.test = 'Profil Route Çağırıldı.';
    next();
});

router.get('/', myprofilcontroller.profile);
router.get('/cv', myprofilcontroller.cv);

module.exports = router;