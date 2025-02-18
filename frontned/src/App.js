import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentInfo from './components/Studentinfo';
import Academics from './components/Academics';
import Internships from './components/Internships';
// import Certificates from './components/Certificates';
import JobPostForm from './components/JobPostForm';
import JobPostPage from './components/JobPostPage';
import StudnetInternships from './components/StudentInternship';
import CompanyProfile from './components/companyprofile';
import Addcompany from './components/Addcompany';
import FeedbackFormold from './components/feedbackform';
import FeedbackForm from './components/feedbackformnew';
import TpoInternships from './components/TpoInternship';

import ShortlistStudents from './components/ShortlistStudents';

import FinanceRoadmap from './components/finance';
import Roadmap from './components/roadmap';

import MicroinvestmentPlatform from './components/microinvestment';
import MicroinvestmentPlatformtwo from './components/mip';
import RuralBusinessOpportunities from './components/listfin';
import Chatbot from './components/chatbot';
import PoultryFarmGuide from './components/polutry';
import DiscussionForums from './components/forum';
import DairyForumPage from './components/dairyforum';
import SuccessStories from './components/successStories';
import QASessions from './components/qna';
import QRCodeGenerator from './components/qrcode';
import QRScanner from './components/qrscanner';

import { Toaster } from 'react-hot-toast';



import Modal from './components/PostnewJob';    
function App() {

    return (
        
        <Router>
            <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            padding: '16px',
            minWidth: '400px',
            fontSize: '22px',
            backgroundColor: '#363636',
            color: 'white',
            borderRadius: '10px',
          },
          success: {
            style: {
              background: 'linear-gradient(to left, #00b09b, #96c93d)',
            },
          },
          error: {
            style: {
              background: 'linear-gradient(to left,rgb(255, 55, 72), #ffc371)',
            },
          },
        }}
      />
            <Routes>
                
                
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/student-info" element={<StudentInfo />} /> 
                <Route path="/academics" element={<Academics />} />
                <Route path="/tpointernships" element={<Internships/>} />
                {/* <Route path="/certificates" element={<Certificates />} />  */}
                <Route path="/postjob" element={<JobPostForm/>} />
                <Route path="/postjobpage" element={<JobPostPage/>} />
                <Route path="/studentinternships" element={<StudnetInternships/>} />
                <Route path="/companyprofile" element={<CompanyProfile/>} />
                <Route path="/feedbackform/:id" element={<FeedbackForm/>} />

                <Route path="/feedbackformold" element={<FeedbackFormold/>} />
                <Route path="/addcompany" element={<Addcompany/>} />
                <Route path="/postjobnew" element={<Modal/>} />

                <Route path="/tpointernshipsnew" element={<TpoInternships/>} />
                <Route path="/shortliststudents" element={<ShortlistStudents/>} />
                <Route path="/finance" element={<FinanceRoadmap />} />

                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/microinvestment" element={<MicroinvestmentPlatform />} />
                <Route path="/mip" element={<MicroinvestmentPlatformtwo />} />
                <Route path="/ruralbusiness" element={<RuralBusinessOpportunities />} />
                <Route path="/chatbot" element={<Chatbot />}/>
                <Route path="/polutry" element={<PoultryFarmGuide />}/>
                <Route path="/discussionforums" element={<DiscussionForums />}/>
                <Route path="/dairyforum" element={<DairyForumPage />}/>
                <Route path="/successstories" element={<SuccessStories />}/>
                <Route path="/qna" element={<QASessions />}/>
                <Route path="/qrcode" element={<QRCodeGenerator />} />
                <Route path='/qrscanner' element={<QRScanner/>} />

            </Routes>
        </Router>
        

    );
}

export default App;
