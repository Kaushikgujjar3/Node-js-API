var express = require('express')
var router = express.Router();
var usercontrollers = require("../controller/usercontroller")

router.post('/', usercontrollers.login_user)
router.post('/register', usercontrollers.register_user)
router.get('/logout', usercontrollers.logout_user)


module.exports = router