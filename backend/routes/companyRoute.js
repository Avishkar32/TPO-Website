const express = require('express');

const companycontroller = require('./../controllers/companycontroller');



const router = express.Router();

router
    .route('/')
    .post(companycontroller.createCompany)
    .get(companycontroller.getAllCompanies)
    
router
    .route('/:id')
    .get(companycontroller.getCompanyData)
    

module.exports = router;


