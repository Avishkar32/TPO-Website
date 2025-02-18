import React, { useState } from 'react';
import { Building2, Mail, Phone, Globe, MapPin } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';


const CompanyRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    location: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.companyName ||  !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form Data:', formData);

    const details={
        name:formData.companyName,
        location:formData.location,
        website:formData.website,
        hrEmail:formData.email,
        contactPhone:formData.phone

    }

    try {
        const response = await axios.post('http://127.0.0.1:5000/api/company', details, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response.data);
        toast.success('Company added successfully!', {
            icon: '👏',
            style: {
                border: '1px solid #96c93d',
            },
        });
      
    } catch (err) {
        console.error(err);
        toast.error('Failed to save!', {
           
           
          });
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-3">
            Add New Company
          </h1>
          <p className="text-blue-600/70 text-lg">
            Register a new company for campus placements
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/90 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.3)] transition-all duration-300 transform hover:-translate-y-1">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-8 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">Company Details</h2>
            <p className="text-blue-600/70 text-lg">
              Please fill in the company information
            </p>
          </div>

          {/* Card Content */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
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
                    <Globe className="text-blue-500 w-6 h-6" />
                    <div className="flex-1">
                      <label htmlFor="website" className="block text-blue-800 font-medium mb-1">
                        Website
                      </label>
                      <input 
                        id="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://example.com"
                        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-[0_2px_8px_rgba(8,_112,_184,_0.1)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                    <MapPin className="text-blue-500 w-6 h-6" />
                    <div className="flex-1">
                      <label htmlFor="location" className="block text-blue-800 font-medium mb-1">
                        Headquarters Location *
                      </label>
                      <input 
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Country"
                        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-[0_2px_8px_rgba(8,_112,_184,_0.1)]"
                        
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-800 pl-4 border-l-4 border-blue-500">
                  Contact Information
                </h3>
                
                <div className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                    <Mail className="text-blue-500 w-6 h-6" />
                    <div className="flex-1">
                      <label htmlFor="email" className="block text-blue-800 font-medium mb-1">
                        HR Email *
                      </label>
                      <input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hr@company.com"
                        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-[0_2px_8px_rgba(8,_112,_184,_0.1)]"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                    <Phone className="text-blue-500 w-6 h-6" />
                    <div className="flex-1">
                      <label htmlFor="phone" className="block text-blue-800 font-medium mb-1">
                        Contact Number *
                      </label>
                      <input 
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3 py-2 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 hover:shadow-[0_2px_8px_rgba(8,_112,_184,_0.1)]"
                        required
                      />
                    </div>
                  </div>
                </div>
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
                  Register Company
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;