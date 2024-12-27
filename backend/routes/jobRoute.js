const express = require('express');
const jobcontroller = require('./../controllers/jobcontroller');



const router = express.Router();

router
    .route('/')
    .post(jobcontroller.createJob)
    .get(jobcontroller.getAllJobs)
    
router
    .route('/:id')
    .get(jobcontroller.getjobdata)
    .put(jobcontroller.updateJob)
    .delete(jobcontroller.deleteJob)

router
    .route('/closeapplications/:id')
    .patch(jobcontroller.closeapplications)

router
    .route('/recuritmentdrivecompleted/:id')
    .patch(jobcontroller.recuritmentdrivecompleted)

router
    .route('/feedback/:id')
    .patch(jobcontroller.pushFeedbackform)

router
    .route('/addfeedback/:id')
    .patch(jobcontroller.addFeedback);

router  
    .route('/apply/:studentId/:jobId')
    .post(jobcontroller.applyJob)

module.exports = router;


