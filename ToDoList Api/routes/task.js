var express = require('express');
var router = express.Router();
var taskcontroller = require("../controller/taskcontroller")

router.post ('/add_task', taskcontroller.add_task);
router.get ('/view_task', taskcontroller.view_task);
router.get ('/delete_task/:id', taskcontroller.delete_task);
router.get ('/update_task/:id', taskcontroller.update_task);
router.get ('/task/:id', taskcontroller.single_task);

module.exports = router;
