var express = require('express')
var router = express.Router();
var usercontrollers = require("../controller/admincontroller")

router.post('/', usercontrollers.login_admin)
router.post('/register', usercontrollers.register_admin)
router.get('/user_blog/:id', usercontrollers.view_blog_user_wise)

module.exports = router