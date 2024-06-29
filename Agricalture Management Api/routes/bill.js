var express = require('express');
var router = express.Router();
var billcontrller = require("../controller/billcontroller")


router.get('/bill', billcontrller.add_bill);



module.exports = router;
