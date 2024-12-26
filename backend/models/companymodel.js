const mongoose = require('mongoose');
const validator = require('validator');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Company name is required.'],
        trim: true,
        minlength: [2, 'Company name must be at least 2 characters long.'],
        maxlength: [100, 'Company name must not exceed 100 characters.']
    },
    location: {
        type: String,
        
        trim: true,
        minlength: [3, 'Location must be at least 3 characters long.'],
        maxlength: [100, 'Location must not exceed 100 characters.']
    },
    website: {
        type: String,
        
        trim: true,
       
    },
    hrEmail: {
        type: String,
        required: [true, 'HR email is required.'],
        trim: true,
        lowercase: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: 'Invalid email address.'
        }
    },
    contactPhone: {
        type: String,
        trim: true,
        validate: {
            validator: (value) => validator.isMobilePhone(value, 'any', { strictMode: true }),
            message: 'Invalid phone number.'
        }
    },
    currentJobOpening: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }],
    pastHiringDrives: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

// Pre-save hook to enforce consistent formatting
// companySchema.pre('save', function(next) {
//     this.name = this.name.trim();
//     this.location = this.location.trim();
//     this.website = this.website.trim();
//     this.hrEmail = this.hrEmail.trim().toLowerCase();
//     next();
// });

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
