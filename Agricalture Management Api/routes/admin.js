var express = require('express');
var router = express.Router();
var admincontrller = require("../controller/admincontroller")

/* GET home page. */
router.post('/register', admincontrller.admin_register );
router.post('/', admincontrller.admin_login);

module.exports = router;
