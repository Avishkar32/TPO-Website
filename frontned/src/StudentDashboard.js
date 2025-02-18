import React, { useState } from 'react';
import './StudentDashboard.css'; // Make sure to create a separate CSS file

const StudentDashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [showGradeCard, setShowGradeCard] = useState(false);
    const [internshipDetails, setInternshipDetails] = useState(null);
    const [notificationVisible, setNotificationVisible] = useState(false);

    const showSection = (section) => {
        setActiveSection(section);
    };

    const saveStudentInfo = () => {
        // Implement save logic here
        setNotificationVisible(true);
        setTimeout(() => setNotificationVisible(false), 2000);
    };

    const deleteStudentInfo = () => {
        // Implement delete logic here
        setNotificationVisible(true);
        setTimeout(() => setNotificationVisible(false), 2000);
    };

    const generateGradeCard = () => {
        setShowGradeCard(true);
    };

    const showInternshipDetails = (id) => {
        // Implement logic to fetch internship details based on ID
        const details = {
            1: { title: 'Software Developer Intern', description: 'Description for Software Developer Intern', location: 'Pune', role: 'Developer' },
            2: { title: 'Data Analyst Intern', description: 'Description for Data Analyst Intern', location: 'Mumbai', role: 'Analyst' },
            3: { title: 'UX/UI Designer Intern', description: 'Description for UX/UI Designer Intern', location: 'Bangalore', role: 'Designer' },
            4: { title: 'Marketing Intern', description: 'Description for Marketing Intern', location: 'Chennai', role: 'Marketer' },
        };
        setInternshipDetails(details[id]);
    };

    const closePopup = () => {
        setInternshipDetails(null);
    };

    return (
        <div className="container">
            <div className="nav">
                <a href="#" onClick={() => showSection('dashboard')}>Dashboard</a>
                <a href="#" onClick={() => showSection('student-info')}>Student Info</a>
                <a href="#" onClick={() => showSection('academics')}>Academic Details</a>
                <a href="#" onClick={() => showSection('internships')}>Internships</a>
                <a href="#" onClick={() => showSection('certificates')}>Certificates</a>
            </div>

            {/* Welcome Dashboard */}
            {activeSection === 'dashboard' && (
                <div className="section active welcome-dashboard">
                    <h1>Welcome, Ved Sharma</h1>
                    <p>Your one-stop platform for academic, internship, and certification management.</p>
                    <div className="section-grid">
                        <div className="card" onClick={() => showSection('student-info')}>Student Info</div>
                        <div className="card" onClick={() => showSection('academics')}>Academic Details</div>
                        <div className="card" onClick={() => showSection('internships')}>Internships</div>
                        <div className="card" onClick={() => showSection('certificates')}>Certificates</div>
                    </div>
                </div>
            )}
            

            
        </div>
    );
};

export default StudentDashboard;
