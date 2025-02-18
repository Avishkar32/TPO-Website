import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Dashboard.css';
import axios from 'axios';
import Swal from 'sweetalert2'; // SweetAlert2 for popups

const Dashboard = () => {
  const [data, setData] = useState(null);  // Initialize state to hold the response data
  const [loading, setLoading] = useState(true);  // State to manage loading
 

  useEffect(() => {
    // Fetch student data from the backend
    axios.get('http://127.0.0.1:5000/api/student/6701ef7896463be1fe96063d')
      .then(response => {
        console.log(response.data);
        setData(response.data);  
        setLoading(false);  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);  // Set loading to false even in case of error
      });
  }, []);

  // Watch for changes in 'data' and check for jobswithFeedback
  useEffect(() => {
    if (data && data.jobswithFeedback && data.jobswithFeedback.length > 0) {
      const job = data.jobswithFeedback[0]; // Get the first job needing feedback
      if (job.feedbackrequired) {
        showFeedbackPopup(job);
        };
      }
    
  }, [data]);



 
  const showFeedbackPopup = async (job) => {
    
    const response = await axios.get(`http://127.0.0.1:5000/api/jobs/${job.jobId}`);
    
    Swal.fire({
      text: `Please submit feedback for the interview with ${response.data.job.companyName}.`,
      icon: 'info',
      confirmButtonText: 'Go to Feedback Form',
      allowOutsideClick: false,
      confirmButtonText: 'Go to Feedback Form',
    }).then((result) => {
      if (result.isConfirmed) {
        // You can navigate to the feedback form here
        // navigate(`/feedback/${job.jobId}`); 
        window.location.href = `http://localhost:3000/feedbackform/${response.data.job._id}`;
      }
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;  // Display a loading message while fetching data
  }

  if (!data || !data.student) {
    return <h1>Error: No data available</h1>;  // Handle the case where data or student is undefined
  }

  return (
    <div className='container'>
      <Navbar />

      <div className="section active welcome-dashboard">
        <h1>Welcome, {data.student.studentname}</h1>  {/* Safely access studentname */}
        <p>Your one-stop platform for academic, internship, and certification management.</p>
        <div className="section-grid">
          <Link to="/student-info" className="card">Student Info</Link>
          
          <Link to="/academics" className="card">Academic Details</Link>
          
          <Link to="/tpointernshipsnew" className="card">TPO internship</Link>
          
          <Link to="/postjobnew" className="card">TPO Post Job</Link>

          
          <Link to="/studentinternships" className="card">Student Internship</Link>

          <Link to="/feedbackform" className="card">Feedback Form</Link>
          
          
          <Link to="/companyprofile" className="card">Company Profile</Link>

          <Link to="/addcompany" className="card">Add Company</Link>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
