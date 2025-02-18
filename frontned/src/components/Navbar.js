// components/Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Navbar = () => {
    return (
 
            <div className="nav">
                <Link to="/dashboard"><a>Dashboard</a></Link>
                <Link to="/student-info"><a>Student Info</a></Link>
                <Link to="/academics"><a>Academic Details</a></Link>
                <Link to="/internships"><a >Internships</a></Link>
                <Link to="/student-info"><a >Certificates</a></Link>
            </div>

           
    );
};

export default Navbar;
