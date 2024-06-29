var express = require('express')
var router = express.Router();
var blogcontrollers = require("../controller/blogcontroller")
const multer = require('multer');


// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })




router.post('/add_category', blogcontrollers.add_cetegory)
router.post('/add_blog', upload.single('image') , blogcontrollers.add_blog)
router.get('/view_blog', blogcontrollers.view_blog)
router.get('/delete_blog/:id', blogcontrollers.delete_blog)
router.post('/update_blog/:id', blogcontrollers.update_blog)
router.get('/like_blog/:id', blogcontrollers.like_blog)
router.post('/comment_blog/:id', blogcontrollers.comment_blog)



module.exports = router