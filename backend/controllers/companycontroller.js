const Company = require("../models/companymodel")

// Create a new Company
exports.createCompany = async (req, res) => {
    console.log(req.body);

    try {
        const newCompany = await Company.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                company: newCompany,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Get a single Company's data by ID
exports.getCompanyData = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({
                status: 'fail',
                message: 'Company not found',
            });
        }

        res.status(200).json({
            status: 'success',
            company,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Get all Companies
exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json({
            status: 'success',
            allCompanies: companies,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};
