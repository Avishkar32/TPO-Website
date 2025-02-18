import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Building2, MapPin, Clock, DollarSign, Briefcase, X } from 'lucide-react';

const StudentInternships = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/jobs');
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
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

  const applyForInternship = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/api/jobs/apply/6701ef7896463be1fe96063d/${selectedJob._id}`
      );
      alert('Applied for internship!');
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      setShowPopup(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-blue-600 text-xl">Loading opportunities...</div>
      </div>
    );
  }

  if (!data || !data.alljobs) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-blue-600 text-xl">No internships available at the moment.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-3">
            Available Opportunities
          </h1>
          <p className="text-blue-600/70 text-lg">
            Discover and apply for exciting internships and jobs
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.alljobs
            .filter(job => job.status === "applicationsOpen")
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

        {/* Detailed Popup */}
        {showPopup && selectedJob && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all">
              <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-6 rounded-t-xl relative">
                <button
                  onClick={closePopup}
                  className="absolute right-4 top-4 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-center space-x-3">
                  <Building2 className="text-blue-500 w-6 h-6" />
                  <h3 className="text-2xl font-bold text-blue-800">{selectedJob.companyName}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-blue-500 w-5 h-5" />
                    <div>
                      <p className="text-sm text-blue-600/70">Location</p>
                      <p className="font-semibold text-blue-800">Pune</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-500 w-5 h-5" />
                    <div>
                      <p className="text-sm text-blue-600/70">Duration</p>
                      <p className="font-semibold text-blue-800">{selectedJob.duration} months</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <DollarSign className="text-blue-500 w-5 h-5" />
                    <div>
                      <p className="text-sm text-blue-600/70">Stipend</p>
                      <p className="font-semibold text-blue-800">{selectedJob.stipendAmount} per month</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-blue-500 w-5 h-5" />
                    <div>
                      <p className="text-sm text-blue-600/70">Role</p>
                      <p className="font-semibold text-blue-800">{selectedJob.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-blue-500 w-5 h-5" />
                    <div>
                      <p className="text-sm text-blue-600/70">Application Deadline</p>
                      <p className="font-semibold text-blue-800">{new Date(selectedJob.applicationDeadline).toLocaleDateString("en-GB")}</p>
                       
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Briefcase className="text-blue-500 w-5 h-5" />
                    <div>
                      <p className="text-sm text-blue-600/70">Job Type</p>
                      <p className="font-semibold text-blue-800">{selectedJob.jobType}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={applyForInternship}
                  className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 
                           text-white rounded-lg hover:from-blue-700 hover:to-blue-600 
                           shadow-lg hover:shadow-xl transition-all duration-300 
                           transform hover:-translate-y-0.5"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentInternships;