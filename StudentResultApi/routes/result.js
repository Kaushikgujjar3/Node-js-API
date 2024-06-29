var express = require('express')
var router = express.Router();
var resultcontroller = require("../controller/resultcontroller")
var studentlogincontroller = require("../controller/studentlogincontroller")

router.post('/add_student_result', resultcontroller.add_student_result)
router.get('/view_student_result', resultcontroller.view_student_result)
router.get('/delete_result/:id', resultcontroller.delete_result)
router.post('/update_result/:id', resultcontroller.update_result)
router.post('/view_result', studentlogincontroller.view_result)
router.get('/top_5', studentlogincontroller.view_Top5)


module.exports = router