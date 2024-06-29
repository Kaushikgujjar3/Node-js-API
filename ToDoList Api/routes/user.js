var express = require('express');
var router = express.Router();
var usercontroller = require("../controller/usercontroller")

router.post ('/register_user', usercontroller.user_register);
router.get ('/view_user', usercontroller.view_user);
router.post ('/user', usercontroller.user_login);
router.get ('/user_logout', usercontroller.user_logout);
router.get ('/delete_user/:id', usercontroller.delete_user);
router.post ('/update_user/:id', usercontroller.update_user);
router.get ('/single_user/:id', usercontroller.single_user);


module.exports = router;
