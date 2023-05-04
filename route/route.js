//route maps to different scenarios to help easy passage

var express = require('express');

var studentController = require('../src/aluminiController.js');
const router = express.Router();

router.route('/alumini/login').post(studentController.loginUserControllerFn);
router.route('/alumini/create').post(studentController.createStudentControllerFn);


module.exports = router;