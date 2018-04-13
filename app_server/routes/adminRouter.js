var express = require('express');
var router = express.Router();
var myadmincontroller = require('../controller/adminController');

router.use(function (req, res, next) {
    req.test = 'admin Route Çağırıldı.';
    next();
});

router.get('/', myadmincontroller.admin);
router.get('/logout', myadmincontroller.logout);

router.get('/gbook', myadmincontroller.gbook);
router.post('/gbookconf/:id', myadmincontroller.gbookconf);

router.get('/user', myadmincontroller.admuser);
router.get('/user/deluser/:email', myadmincontroller.deluser);
router.post('/useredit/:id', myadmincontroller.useredit);

module.exports = router;