var express = require('express');
var router = express.Router();
var admincontrller = require("../controller/usercontroller")

/* GET home page. */
router.post('/user_register', admincontrller.user_register);
router.post('/user', admincontrller.user_login);
router.get('/user_log_out', admincontrller.log_out);
router.get ('/user_product', admincontrller.view_product);
router.get ('/view_single_product/:id', admincontrller.view_single_product);

module.exports = router;
