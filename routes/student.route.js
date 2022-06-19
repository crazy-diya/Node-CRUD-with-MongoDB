const express = require('express')
const router = express.Router()

const studentController = require('../controllers/student.controller')

router.get('/',studentController.getStudentDataList).post('/',studentController.postStudentData)
router.get('/:id',studentController.getSingleStudentData).put('/:id',studentController.updateStudentData)


module.exports = router