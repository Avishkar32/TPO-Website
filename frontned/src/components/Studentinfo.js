import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const StudentInfo = () => {
    const [studentInfo, setStudentInfo] = useState({
        name: 'Ved Sharma',
        mobile: '9876543210',
        email: 'ved.sharma@example.com',
        rollNo: '2020101234',
        grNo: 'GR123456',
    });
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response = await axios.get('http://127.0.0.1:5000/api/student/6701ef7896463be1fe96063d');
                setStudentInfo(response.data);
                console.log(response.data);
            }
            catch(err)
            {
                console.log(err);
            }
            finally {
                setLoading(false); // Ensure loading is set to false regardless of success or error
            }
        };

        fetchData();

    }, []);


    const handleChange = (e) => {
        const { id, value } = e.target;
        setStudentInfo((prevInfo) => ({
            ...prevInfo,
            [id]: value,
        }));
    };

    const saveStudentInfo = () => {
        // Implement save functionality here
        alert('Student information saved!');
    };

    const deleteStudentInfo = () => {
        // Implement delete functionality here
        alert('Student information deleted!');
    };

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator
    }

    // Check if data and alljobs are available
    if (!studentInfo || !studentInfo.student) {

        return <div>Deatils not available</div>; // Handle case with no data
    }

    return (
        <div className='container'>
            <Navbar/>
            <h2>Student Information</h2>
            <form id="studentInfoForm">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={studentInfo.student.studentname} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="text" id="mobile" value={"9766030221"} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={studentInfo.student.email} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="branch">Branch</label>
                    <input type="text" id="rollNo" value={"Artificial Intelligence & Data Science"} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="grNo">GR Number</label>
                    <input type="text" id="grNo" value={studentInfo.student.studentid} readOnly />
                </div>
                <button type="button" className="button" onClick={saveStudentInfo}>Save Changes</button>
                <button type="button" className="button" onClick={deleteStudentInfo}>Delete Info</button>
            </form>
        </div>
    );
};

export default StudentInfo;
