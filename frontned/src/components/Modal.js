import React from 'react';
import './Modal.css'; 
import axios from 'axios';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jobDetails = {
            companyName: formData.get('companyName'),
            role: formData.get('role'),
            jobType: formData.get('jobType'),
            stipendAmount: formData.get('stipendAmt'),
            duration: formData.get('duration'),
            location: formData.get('location'),
            applicationDeadline: formData.get('applicationDeadline'),
            eligibility: {
                graduationYear: formData.getAll('graduationYear').map(Number),
                branchEligibility: formData.getAll('branch'),
                minCGPA: formData.get('cgpa'),
                skillsRequired: formData.get('skills').split(',').map(skill => skill.trim()),
                experienceLevel: formData.get('experienceLevel'),
            },
            numberOfOpenings: formData.get('numberOfOpenings'),
            selectionProcess: {
                numberOfRounds: formData.get('numberOfRounds'),
                roundTypes: formData.get('roundTypes').split(',').map(round => round.trim()),
            },
            status: formData.get('status'),
        };

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/jobs', jobDetails, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }

        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2 className="modal-title">Post a New Job</h2>

                <form onSubmit={handleSubmit}>
                    <hr className="section-line" />
                    <h3>Basic Details</h3>
                    
                    {/* Basic Information */}
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name:</label>
                        <input type="text" id="companyName" name="companyName" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" name="role" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobType">Job Type:</label>
                        <select id="jobType" name="jobType" required>
                            <option value="Full-time">Full-time</option>
                            <option value="Internship">Internship</option>
                            <option value="PPO">PPO</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="stipendAmt">Stipend / Salary:</label>
                        <input type="number" id="stipendAmt" name="stipendAmt" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="duration">Duration (Months):</label>
                        <input type="number" id="duration" name="duration" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <select id="location" name="location" required>
                            <option value="On-site">On-site</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="applicationDeadline">Application Deadline:</label>
                        <input type="date" id="applicationDeadline" name="applicationDeadline" required />
                    </div>

                    {/* Eligibility Criteria */}
                    <hr className="section-line" />
                    <h3>Eligibility Criteria</h3>
                    
                    <div className="form-group">
                        <label htmlFor="graduationYear">Graduation Year:</label>
                        <input type="number" id="graduationYear" name="graduationYear" required multiple />
                    </div>

                    <div className="form-group">
                        <label>Eligible Branches:</label>
                        <div className="branch-grid">
                            <label><input type="checkbox" name="branch" value="CSE" /> CSE</label>
                            <label><input type="checkbox" name="branch" value="ECE" /> ECE</label>
                            <label><input type="checkbox" name="branch" value="IT" /> IT</label>
                            <label><input type="checkbox" name="branch" value="ME" /> ME</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cgpa">Minimum CGPA / Percentage:</label>
                        <input type="number" id="cgpa" name="cgpa" step="0.01" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="skills">Required Skills / Languages:</label>
                        <input type="text" id="skills" name="skills" required placeholder="e.g., Java, Python, DSA" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="experienceLevel">Experience Level:</label>
                        <select id="experienceLevel" name="experienceLevel">
                            <option value="Fresher">Fresher</option>
                            <option value="Experienced">Experienced</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="numberOfOpenings">Number of Openings:</label>
                        <input type="number" id="numberOfOpenings" name="numberOfOpenings" required />
                    </div>

                    {/* Selection Process */}
                    <hr className="section-line" />
                    <h3>Selection Process</h3>
                    
                    <div className="form-group">
                        <label htmlFor="numberOfRounds">Number of Rounds:</label>
                        <input type="number" id="numberOfRounds" name="numberOfRounds" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="roundTypes">Round Types:</label>
                        <input type="text" id="roundTypes" name="roundTypes" required placeholder="e.g., Aptitude Test, Coding Round" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <select id="status" name="status" required>
                            <option value="applicationsOpen">Applications Open</option>
                            <option value="ongoing">Ongoing</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-button">Post Job</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
