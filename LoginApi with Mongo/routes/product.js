var express = require('express');
var router = express.Router();
const multer = require('multer');

);

//multer start
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })

var user = require('../controller/productcontroller')

router.post('/add_product',upload.array('images',10),user.add_product)



module.exports = router;
