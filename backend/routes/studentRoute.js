const express = require('express');
const studentController = require('../controllers/studentcontroller');

const router = express.Router();

router
    .route('/')
    .post(studentController.createStudent);

router  
    .route('/:id')
    //.get(studentController.getStudentdata)
    .get(studentController.getAppliedJobsWithFeedback)



module.exports = router;