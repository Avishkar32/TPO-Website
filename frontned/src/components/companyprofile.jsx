import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Building2, Mail, Phone, Users, DollarSign, Briefcase, Award, Heading2 } from 'lucide-react';

const dataCategory = [
  { name: 'Graphs', value: 39.1, color: '#FFBB28' },
  { name: 'Algorithms', value: 32.6, color: '#FF8042' },
  { name: 'Trees', value: 15.2, color: '#0088FE' },
  { name: 'Arrays and Linked Lists', value: 13, color: '#00C49F' },
];

const dataDifficulty = [
  { name: 'Super Hard', value: 31.3, color: '#00C49F' },
  { name: 'Hard', value: 26.9, color: '#FFBB28' },
  { name: 'Intermediate', value: 17.9, color: '#0088FE' },
  { name: 'Easy', value: 23.9, color: '#FF8042' },
];

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-3 leading-relaxed py-1">
          Company Profile
        </h1>
      </div>

        {/* Main Card */}
        <div className="bg-white/90 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.3)] transition-all duration-300 transform hover:-translate-y-1 mb-8">
          <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-8 rounded-t-lg">
            <div className="flex items-center justify-center ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Logo"
                className="h-16 object-contain"
              />
            </div>
          </div>

          <div className="p-8 space-y-6">
            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                <Briefcase className="text-blue-500 w-6 h-6" />
                <div>
                  <p className="text-sm text-blue-600/70">Roles Offered</p>
                  <p className="font-semibold text-blue-800">Project Intern, Software Developer</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                <Users className="text-blue-500 w-6 h-6" />
                <div>
                  <p className="text-sm text-blue-600/70">Students Interned</p>
                  <p className="font-semibold text-blue-800">38</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                <DollarSign className="text-blue-500 w-6 h-6" />
                <div>
                  <p className="text-sm text-blue-600/70">Average Stipend</p>
                  <p className="font-semibold text-blue-800">$3000/month</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transform hover:-translate-y-0.5">
                <Award className="text-blue-500 w-6 h-6" />
                <div>
                  <p className="text-sm text-blue-600/70">PPO Conversion</p>
                  <p className="font-semibold text-blue-800">23 offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Openings Card */}
        <div className="bg-white/90 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] mb-8">
          <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">Current Job Openings</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
              <Building2 className="text-blue-500 w-6 h-6" />
              <div className="flex-1 space-y-2">
                <p className="text-blue-800 font-semibold">SDE 1</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <p className="text-blue-600/70">Skills: MERN</p>
                  <p className="text-blue-600/70">Stipend: 95000</p>
                  <p className="text-blue-600/70">Eligibility: 9.0+ CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Recruitment Card */}
        <div className="bg-white/90 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] mb-8">
          <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">Past Recruitment Drive</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
              <div className="space-y-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="text-blue-600/70">Month: November</p>
                  <p className="text-blue-600/70">Role: MERN Stack Developer</p>
                </div>

                <div className="space-y-4">
                  {[
                    { round: 'Round 1: Aptitude Test', applied: 300, qualified: 60 },
                    { round: 'Round 2: DSA', qualified: 5 },
                    { round: 'Round 3: HR', qualified: 2 }
                  ].map((round, index) => (
                    <div key={index} className="p-4 bg-blue-50/50 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-2">{round.round}</p>
                      {round.applied && (
                        <p className="text-blue-600/70">Students applied: {round.applied}</p>
                      )}
                      <p className="text-blue-600/70">Students qualified: {round.qualified}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-blue-800 font-semibold">Selected students:</p>
                  <div className="space-y-2 mt-2">
                    {['Avishkar Ghodke', 'Suraj Gitte'].map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                        <span className="text-blue-600">{student}</span>
                        <button className="text-blue-500 hover:text-blue-600 transition-colors">📄</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Charts */}
        <div className="bg-white/90 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]">
          <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-blue-800">Analysis of Past Year DSA Round Questions</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <PieChart width={400} height={400}>
                <Pie
                  data={dataCategory}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>

              <PieChart width={400} height={400}>
                <Pie
                  data={dataDifficulty}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataDifficulty.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;