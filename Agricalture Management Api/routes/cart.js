var express = require('express');
var router = express.Router();
var cartcontrller = require("../controller/cartcontroller")

router.get('/add_to_cart/:id', cartcontrller.add_cart);
router.get('/remove_cart/:id', cartcontrller.remove_cart);



module.exports = router;
