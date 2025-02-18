import React, { useState } from 'react';
import { Building2, Globe, MapPin, Calendar, FileText, User, CheckCircle, Phone, GraduationCap, Briefcase, DollarSign,Users, Target, ListChecks } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditJobModal = (selectedjobid) => {
    

  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    jobType: '',
    stipendAmt: '',
    duration: '',
    location: '',
    applicationDeadline: '',
    graduationYear: [],
    branch: [],
    cgpa: '',
    skills: '',
    experienceLevel: '',
    numberOfOpenings: '',
    numberOfRounds: '',
    roundTypes: '',
    status: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleCheckboxChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      branch: prevState.branch.includes(value)
        ? prevState.branch.filter(branch => branch !== value)
        : [...prevState.branch, value]
    }));
  };
  
  const handleMultiChange = async (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value.split(',').map(item => item.trim())
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form Data:', formData);

    console.log(formData.branch);

    // Validate required fields
    if (!formData.companyName || !formData.role || !formData.location || !formData.applicationDeadline) {
        alert('Please fill in all required fields');
        return;
    }

    const jobDetails = {
        companyName: formData.companyName,
        role: formData.role,
        jobType: formData.jobType,
        stipendAmount: parseFloat(formData.stipendAmt), // Convert stipendAmount to number
        duration: parseInt(formData.duration, 10), // Convert duration to number
        location:formData.location,
        applicationDeadline: new Date(formData.applicationDeadline).toISOString(), // Convert to ISO string
        eligibility: {
            graduationYear: formData.graduationYear.map(Number),
            branchEligibility: formData.branch,
            minCGPA: parseFloat(formData.cgpa), // Convert minCGPA to number
            skillsRequired: formData.skills.split(',').map(skill => skill.trim()),
            experienceLevel: formData.experienceLevel || "Fresher", // Default to "Fresher" if empty
        },
        numberOfOpenings: parseInt(formData.numberOfOpenings, 10), // Convert numberOfOpenings to number
        selectionProcess: {
            numberOfRounds: parseInt(formData.numberOfRounds, 10), // Convert numberOfRounds to number
            roundTypes: formData.roundTypes.split(',').map(round => round.trim()),
        },
        status: formData.status,
    };

    console.log('Job Details:', jobDetails);

    try {
        

        const response = await axios.put(
            `http://127.0.0.1:5000/api/jobs/${selectedjobid}`,
            jobDetails
          );
        console.log(response.data);

        toast.success('Changes saved successfully!', {
          icon: '🎉',
          style: {
              border: '1px solid #96c93d',
          },
      });
    } catch (err) {
        console.error(err.response ? err.response.data : err);
        toast.error('Failed to save!', {
           
           
        });
    }
};




  return (
   
      <div>
        {/* Header */}
        

        {/* Main Card */}
        <div className="bg-white/90 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.3)] transition-all duration-300 transform hover:-translate-y-1">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-8 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">Job Details</h2>
            <p className="text-blue-600/70 text-lg">
              Please fill in the job details
            </p>
          </div>

          {/* Card Content */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-800 pl-4 border-l-4 border-blue-500">
                  Primary Details
                </h3>
                <div className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                    <Building2 className="text-blue-500 w-6 h-6" />
                    <div className="flex-1">
                      <label htmlFor="companyName" className="block text-blue-800 font-medium mb-1">
                        Company Name *
                      </label>
                      <input 
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-[0_2px_8px_rgba(8,_112,_184,_0.1)]"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                    <FileText className="text-blue-500 w-6 h-6" />
                    <div className="flex-1">
                      <label htmlFor="role" className="block text-blue-800 font-medium mb-1">
                        Role *
                      </label>
                      <input 
                        id="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Enter job role"
                        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-[0_2px_8px_rgba(8,_112,_184,_0.1)]"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                    <MapPin className="text-blue-500 w-6 h-6" />

                    <div className="flex-1">
                        <label htmlFor="location" className="block text-blue-800 font-medium mb-1">
                            Location *
                        </label>
                        <select
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        >
                            <option value="">Select Location</option>
                            <option value="Remote">Remote</option>
                            <option value="On-site">On-Site</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div className="group">
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
    <Briefcase className="text-blue-500 w-6 h-6" />
    <div className="flex-1">
      <label htmlFor="jobType" className="block text-blue-800 font-medium mb-1">
        Job Type *
      </label>
      <select
        id="jobType"
        name="jobType"
        value={formData.jobType}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      >
        <option value="">Select Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Internship">Internship</option>
        <option value="Part-time">Part-time</option>
      </select>
    </div>
  </div>
</div>

                <div className="group">
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
    <DollarSign className="text-blue-500 w-6 h-6" />
    <div className="flex-1 grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="stipendAmt" className="block text-blue-800 font-medium mb-1">
          Stipend Amount *
        </label>
        <input
          type="number"
          id="stipendAmt"
          name="stipendAmt"
          value={formData.stipendAmt}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="duration" className="block text-blue-800 font-medium mb-1">
          Duration (months) *
        </label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
    </div>
  </div>
</div>

<div className="group">
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
    <Calendar className="text-blue-500 w-6 h-6" />
    <div className="flex-1">
      <label htmlFor="applicationDeadline" className="block text-blue-800 font-medium mb-1">
        Application Deadline *
      </label>
      <input
        type="date"
        id="applicationDeadline"
        name="applicationDeadline"
        value={formData.applicationDeadline}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />
    </div>
  </div>
</div>

<div className="group">
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
    <Users className="text-blue-500 w-6 h-6" />
    <div className="flex-1">
      <label htmlFor="numberOfOpenings" className="block text-blue-800 font-medium mb-1">
        Number of Openings *
      </label>
      <input
        type="number"
        id="numberOfOpenings"
        name="numberOfOpenings"
        value={formData.numberOfOpenings}
        onChange={handleChange}
        placeholder="Enter number of positions"
        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />
    </div>
  </div>
</div>
              </div>

              {/* Eligibility Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-800 pl-4 border-l-4 border-blue-500">
                  Eligibility Criteria
                </h3>

                <div className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                    <User className="text-blue-500 w-6 h-6" />
                    <div className="flex-1">
                      <label htmlFor="graduationYear" className="block text-blue-800 font-medium mb-1">
                        Graduation Year
                      </label>
                      <input 
                        id="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleMultiChange}
                        placeholder="e.g., 2024, 2025"
                        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-[0_2px_8px_rgba(8,_112,_184,_0.1)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                    <CheckCircle className="text-blue-500 w-6 h-6" />
                    <div className="flex-1">
                      <label htmlFor="skills" className="block text-blue-800 font-medium mb-1">
                        Skills Required
                      </label>
                      <input 
                        id="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="Skill1, Skill2, Skill3"
                        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-[0_2px_8px_rgba(8,_112,_184,_0.1)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
    <GraduationCap className="text-blue-500 w-6 h-6" />
    <div className="flex-1">
      <label className="block text-blue-800 font-medium mb-2">
        Eligible Branches *
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
  {[
    'CSE',
    'MECH',
    'AIDS',
    'IT',
    'AI',
    'AIML',
    'ENTC',
    'CHEMICAL'
  ].map((branch) => (
    <label 
      key={branch} 
      className="flex items-center p-2 hover:bg-blue-50 rounded-md transition-colors duration-200"
    >
      <div className="flex items-center min-w-[120px]">
        <input
          type="checkbox"
          name="branch"
          value={branch}
          checked={formData.branch.includes(branch)}
          onChange={() => handleCheckboxChange(branch)}
          className="w-4 h-4 rounded border-blue-300 text-blue-600 focus:ring-blue-500 mr-3"
        />
        <span className="text-gray-700 text-sm">{branch}</span>
      </div>
    </label>
  ))}
</div>
    </div>
  </div>
</div>
<div className="group">
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
    <GraduationCap className="text-blue-500 w-6 h-6" />
    <div className="flex-1">
      <label htmlFor="cgpa" className="block text-blue-800 font-medium mb-1">
        Minimum CGPA/Percentage *
      </label>
      <input
        type="number"
        step="0.01"
        id="cgpa"
        name="cgpa"
        value={formData.cgpa}
        onChange={handleChange}
        placeholder="e.g., 7.5"
        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />
    </div>
  </div>
</div>
<h3 className="text-xl font-semibold text-blue-800 pl-4 border-l-4 border-blue-500">
                  Additional info
                </h3>

<div className="group">
    
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
    <Target className="text-blue-500 w-6 h-6" />
    
    <div className="flex-1">
      <label htmlFor="numberOfRounds" className="block text-blue-800 font-medium mb-1">
        Number of Rounds *
      </label>
      <input
        type="number"
        id="numberOfRounds"
        name="numberOfRounds"
        value={formData.numberOfRounds}
        onChange={handleChange}
        placeholder="Enter number of rounds"
        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />
    </div>
  </div>
</div>


<div className="group">
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
    <ListChecks className="text-blue-500 w-6 h-6" />
    <div className="flex-1">
      <label htmlFor="roundTypes" className="block text-blue-800 font-medium mb-1">
        Round Types *
      </label>
      <input
        type="text"
        id="roundTypes"
        name="roundTypes"
        value={formData.roundTypes}
        onChange={handleChange}
        placeholder="e.g., Technical, HR, Coding Test"
        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        required
      />
    </div>
  </div>
</div>
<div className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                    <MapPin className="text-blue-500 w-6 h-6" />

                    <div className="flex-1">
                        <label htmlFor="status" className="block text-blue-800 font-medium mb-1">
                            Status *
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        >
                            <option value="">Select Status</option> 
                        <option value="applicationsOpen">Application Open</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                        </select>
                    </div>
                  </div>
                </div>


                {/* Other fields for eligibility, stipend, rounds, etc. can be added similarly */}
               
              </div>
              

              <div className="flex justify-end space-x-4 pt-6">
                
                <button 
                  type="button"
                  className="px-4 py-2 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50 transition-all duration-300"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
       
   
  );
};

export default EditJobModal;
