var express = require('express')
var router = express.Router();
var logincontroller = require("../controller/Logincontroller")

router.post('/', logincontroller.login_data)
router.post('/register', logincontroller.register_insert)
router.get('/register', logincontroller.register_get)


module.exports = router