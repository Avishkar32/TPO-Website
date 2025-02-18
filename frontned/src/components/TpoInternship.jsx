import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapPin, Building2, DollarSign, Clock, Edit, Briefcase } from 'lucide-react';
import ShortlistStudents from './ShortlistStudents';
import { toast } from 'react-hot-toast';

const TpoInternships = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('applicationsOpen');
  const [showShortlistPopup, setShowShortlistPopup] = useState(false);

  const tabs = [
    { id: 'applicationsOpen', label: 'Applications Open' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'completed', label: 'Completed' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/jobs');
        setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const openPopup = (job) => {
    setSelectedJob(job);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openEditPopup = () => {
    setShowEditPopup(true);
  };

  const closeEditPopup = () => {
    setShowEditPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://127.0.0.1:5000/api/jobs/${selectedJob._id}`,
        selectedJob
      );
      setData((prevData) => ({
        ...prevData,
        alljobs: prevData.alljobs.map((job) =>
          job._id === selectedJob._id ? selectedJob : job
        ),
      }));
      closeEditPopup();
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!data || !data.alljobs) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 bg-gradient-to-b from-blue-50 to-white">
        No opportunities available.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-500 mb-4">Available Opportunities</h1>
          <p className="text-lg text-blue-400">Discover and apply for exciting internships and jobs</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 rounded-xl p-1 shadow-lg inline-flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeTab === tab.id 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'text-blue-600 hover:bg-blue-50'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Job Count */}
        <div className="text-center mb-8">
          <p className="text-blue-600/70">
            {data.alljobs.filter(job => job.status === activeTab).length} opportunities found
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.alljobs
            .filter(job => job.status === activeTab)
            .map(job => (
              <div
                key={job._id}
                onClick={() => openPopup(job)}
                className="bg-white/90 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] 
                          hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.3)] transition-all duration-300 
                          transform hover:-translate-y-1 cursor-pointer overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="text-blue-500 w-5 h-5" />
                    <h3 className="text-xl font-semibold text-blue-800">{job.companyName}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-blue-500 w-4 h-4" />
                    <p className="text-blue-600/70">Pune</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-blue-500 w-4 h-4" />
                    <p className="text-blue-600/70">{job.role}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <DollarSign className="text-blue-500 w-4 h-4" />
                    <p className="text-blue-600/70">{job.stipendAmount} per month</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-500 w-4 h-4" />
                    <p className="text-blue-600/70">{job.duration} months</p>
                  </div>
                </div>
              </div>
            ))}
        </div>


        {showPopup && selectedJob && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-2xl w-full">
                      <div className="p-8">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-2xl font-bold text-blue-500">{selectedJob.companyName}</h3>
                          <div className="flex items-center gap-4">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                openEditPopup();
                              }} 
                              className="text-blue-500 hover:text-blue-600 transition-colors"
                            >
                              <Edit className="h-5 w-5" />
                            </button>
                            <button onClick={closePopup} className="text-gray-400 hover:text-gray-600">
                              <span className="text-2xl">&times;</span>
                            </button>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                            <Building2 className="w-5 h-5 text-blue-500 mr-3" />
                            <span className="text-blue-600">{selectedJob.role}</span>
                          </div>
                          
                          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                            <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                            <span className="text-blue-600">Pune</span>
                          </div>
                          
                          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                            <DollarSign className="w-5 h-5 text-blue-500 mr-3" />
                            <span className="text-blue-600">{selectedJob.stipendAmount} per month</span>
                          </div>
                          
                          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                            <Clock className="w-5 h-5 text-blue-500 mr-3" />
                            <span className="text-blue-600">{selectedJob.duration} months</span>
                          </div>
                        </div>

                        {selectedJob.status === 'completed' && (
                       <div  className="flex justify-between">
                         <button
                          onClick={() => setShowShortlistPopup(true)}
                          className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                          Shortlist Students
                        </button>

                        <button
                          
                          className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                          Push Feedback form
                        </button>
                       </div>
                      )}
                      </div>
                    </div>
                  </div>
                )}
        
                {showEditPopup && selectedJob && (
                  <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-2xl w-full">
                      <div className="p-8">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-2xl font-bold text-blue-500">Edit Opportunity</h3>
                          <button onClick={closeEditPopup} className="text-gray-400 hover:text-gray-600">
                            <span className="text-2xl">&times;</span>
                          </button>
                        </div>
                        
                        <form onSubmit={handleEditSubmit} className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="companyName"
                              value={selectedJob.companyName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
        
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Role
                            </label>
                            <input
                              type="text"
                              name="role"
                              value={selectedJob.role}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
        
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Stipend (per month)
                            </label>
                            <input
                              type='number'
                              name="stipendAmount"
                              value={selectedJob.stipendAmount}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
        
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Duration (months)
                            </label>
                            <input
                              type="number"
                              name="duration"
                              value={selectedJob.duration}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
        
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Eligible branches
                            </label>
                            <input
                              type="number"
                              name="duration"
                              value={selectedJob.duration}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
        
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                              Status
                            </label>
                            <div className="space-y-2">
                              {['applicationsOpen', 'ongoing', 'completed'].map((status) => (
                                <label key={status} className="flex items-center p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                                  <input
                                    type="radio"
                                    name="status"
                                    value={status}
                                    checked={selectedJob.status === status}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                  />
                                  <span className="ml-2 text-gray-700 capitalize">
                                    {status.replace(/([A-Z])/g, ' $1').trim()}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
        
                          <div className="flex justify-end pt-4">
                            <button
                              type="submit"
                              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

        {showShortlistPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-2xl w-full">
              {console.log(selectedJob.studentsApplied)}
              
              <ShortlistStudents
                appliedStudents={selectedJob.studentsApplied}
                onSave={async (selectedIds) => {
                  const shortlistedStudents = selectedIds; // Declare shortlistedStudents

                  try {
                    const response = await axios.patch(
                      `http://127.0.0.1:5000/api/jobs/shortlist/${selectedJob._id}`, 
                      { shortlistedStudents }, // Send the shortlisted students
                      { headers: { 'Content-Type': 'application/json' } }
                    );
                    console.log(response.data);
                    toast.success('Students shortlisted successfully!', {
  
                      style: {
                        border: '1px solid #96c93d',
                      },
                    });
                  } catch (err) {
                    console.error(err);
                    toast.error('Failed to save!', {});
                  }
                  setShowShortlistPopup(false);
                }}
              /> 
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TpoInternships;