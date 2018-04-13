var express = require('express');
var router = express.Router();
var mycontroller = require('../controller/myController');

router.get('/', mycontroller.index);

router.get('/login', mycontroller.login);
router.post('/login', mycontroller.loginpost);
router.get('/signup', mycontroller.signup);
router.post('/signup', mycontroller.signuppost);
router.get('/contactme', mycontroller.contactme);
router.post('/submit', mycontroller.submit);
router.get('/guestbook', mycontroller.guestbook);
router.post('/gbookadd', mycontroller.gbookadd);

module.exports = router;