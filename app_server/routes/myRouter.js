
var express = require('express');
var router = express.Router();
var mycontroller = require('../controller/myController');

router.get('/', mycontroller.index);
router.get('/login', mycontroller.login);
router.post('/login', mycontroller.loginpost);

module.exports = router;