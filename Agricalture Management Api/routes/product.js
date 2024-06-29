var express = require('express');
var router = express.Router();
var productcontrller = require("../controller/productcontroller")

/* GET home page. */
router.post('/add_product', productcontrller.add_product);
router.get('/view_product', productcontrller.view_product);
router.get('/delete_product/:id', productcontrller.delete_product);
router.post('/update_product/:id', productcontrller.update_product);

module.exports = router;
