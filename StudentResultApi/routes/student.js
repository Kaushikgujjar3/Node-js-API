var express = require('express')
var router = express.Router();
var studentcontroller = require("../controller/studentcontroller")

router.post('/add_student', studentcontroller.add_student)
router.get('/view_student', studentcontroller.get_student)
router.get('/manage_student/delete/:id', studentcontroller.delete_student)
router.get('/manage_student/update/:id', studentcontroller.update_student)


module.exports = router