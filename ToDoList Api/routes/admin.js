var express = require('express');
var router = express.Router();
var admincontroller = require("../controller/admincontroller")

router.post ('/register', admincontroller.admin_register);
router.post('/', admincontroller.admin_login);

module.exports = router;
