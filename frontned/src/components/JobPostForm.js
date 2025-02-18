import React, { useState } from 'react';

const JobPostForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        role: '',
        location: '',               // Enum: "On-site", "Hybrid", "Remote"
        jobType: '',                // Enum: "Full-time", "Internship", "PPO", "Part-time", "Contract"
        stipendAmount: '',          // Changed from stipendAmt to stipendAmount
        duration: '',               // Number, in months
        applicationDeadline: '',    // Date, format "YYYY-MM-DD"
        eligibility: {
            graduationYear: [],      // Array of numbers
            branchEligibility: [],   // Array of strings
            minCGPA: ''              // Number
        },
        skillsRequired: '',         // Added skills required
        experienceLevel: '',        // Enum: "Fresher", "Experienced"
        numberOfOpenings: '',       // Number
        selectionProcess: {
            numberOfRounds: '',      // Number
            roundTypes: ''           // Array of strings
        },
        status: 'applicationsOpen'  // Default to "applicationsOpen"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Nested state handling for eligibility and selectionProcess objects
        if (name.startsWith('eligibility.') || name.startsWith('selectionProcess.')) {
            const [section, field] = name.split('.');
            setFormData({
                ...formData,
                [section]: {
                    ...formData[section],
                    [field]: field === 'graduationYear' || field === 'branchEligibility' || field === 'roundTypes' 
                             ? value.split(',').map(item => item.trim()) // Split string input into array
                             : value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Job posted:', formData);
        // Add your API call here to submit the form data
    };

    return (
        <div className="container">
            <h2 className="form-title">Post a New Job</h2>
            <form className="job-post-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Location</option>
                        <option value="On-site">On-site</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="jobType">Job Type:</label>
                    <select
                        id="jobType"
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Internship">Internship</option>
                        <option value="PPO">PPO</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="stipendAmount">Stipend Amount:</label>
                    <input
                        type="number"
                        id="stipendAmount"
                        name="stipendAmount"
                        value={formData.stipendAmount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration (months):</label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="applicationDeadline">Application Deadline:</label>
                    <input
                        type="date"
                        id="applicationDeadline"
                        name="applicationDeadline"
                        value={formData.applicationDeadline}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eligibility.graduationYear">Graduation Year:</label>
                    <input
                        type="text"
                        id="graduationYear"
                        name="eligibility.graduationYear"
                        value={formData.eligibility.graduationYear}
                        onChange={handleChange}
                        placeholder="E.g., 2025,2026"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eligibility.branchEligibility">Branch Eligibility:</label>
                    <input
                        type="text"
                        id="branchEligibility"
                        name="eligibility.branchEligibility"
                        value={formData.eligibility.branchEligibility}
                        onChange={handleChange}
                        placeholder="E.g., CSE,ECE"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eligibility.minCGPA">Minimum CGPA:</label>
                    <input
                        type="number"
                        id="minCGPA"
                        name="eligibility.minCGPA"
                        value={formData.eligibility.minCGPA}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="selectionProcess.numberOfRounds">Number of Rounds:</label>
                    <input
                        type="number"
                        id="numberOfRounds"
                        name="selectionProcess.numberOfRounds"
                        value={formData.selectionProcess.numberOfRounds}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="selectionProcess.roundTypes">Round Types:</label>
                    <input
                        type="text"
                        id="roundTypes"
                        name="selectionProcess.roundTypes"
                        value={formData.selectionProcess.roundTypes}
                        onChange={handleChange}
                        placeholder="E.g., Aptitude Test, Coding Round"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Post Job</button>
            </form>
        </div>
    );
};

export default JobPostForm;
