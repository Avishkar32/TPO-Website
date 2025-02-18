// components/Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar  from './Navbar';
import './Dashboard.css'

const Academics = () => {
    return (
        <div  className='container'>
            <Navbar/>
            <h2>Academic Details</h2>
            <table className="card-table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Credits</th>
                        <th>Grade</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DBMS</td>
                        <td>4</td>
                        <td>B</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Networks</td>
                        <td>3</td>
                        <td>A</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Operating Systems</td>
                        <td>3</td>
                        <td>B+</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Software Engineering</td>
                        <td>4</td>
                        <td>A-</td>
                        <td>4.5</td>
                    </tr>
                    <tr>
                        <td>Web Development</td>
                        <td>3</td>
                        <td>B</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Data Structures</td>
                        <td>3</td>
                        <td>A</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Computer Architecture</td>
                        <td>3</td>
                        <td>C+</td>
                        <td>3</td>
                    </tr>
                    
                </tbody>
            </table>
            <button type="button" className="button" onclick="generateGradeCard()">Generate Grade Card</button>
            <div id="grade-card" >
                <h3>Grade Card</h3>
                <p><strong>CGPA:</strong> 8.5</p>
                <p><strong>Result:</strong> Passed</p>
            </div>
        </div>
    );
};

export default Academics;
