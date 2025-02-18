// JobPostPage.js
import React, { useState } from 'react';
import Modal from './Modal';

const JobPostPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };



    return (
        <div className="job-post-page">
            <h1>Job Openings</h1>
            <button className="button" onClick={handleOpenModal}>Add Opening</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}  />
        </div>
    );
};

export default JobPostPage;
