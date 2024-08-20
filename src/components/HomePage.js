// src/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [course, setCourse] = useState('');
    const [branch, setBranch] = useState('');
    const [semester, setSemester] = useState('');
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleReset = () => {
        setSelectedOption('');
        setCourse('');
        setBranch('');
        setSemester('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedOption && course && branch && semester) {
            navigate('/download', { state: { course, branch, semester } });
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    What do you want to search?
                    <select value={selectedOption} onChange={handleSelectChange}>
                        <option value="">Select an option</option>
                        <option value="download-question-paper">Download Question Paper</option>
                    </select>
                </label>

                {selectedOption === 'download-question-paper' && (
                    <>
                        <label>
                            Select Course:
                            <select value={course} onChange={(e) => setCourse(e.target.value)}>
                                <option value="">Select a course</option>
                                <option value="engineering">Engineering</option>
                                <option value="medical">Medical</option>
                            </select>
                        </label>
                        <label>
                            Select Branch:
                            <select value={branch} onChange={(e) => setBranch(e.target.value)}>
                                <option value="">Select a branch</option>
                                <option value="it">IT</option>
                                <option value="cs">CS</option>
                                <option value="extc">EXTC</option>
                                <option value="ai">AI</option>
                            </select>
                        </label>
                        <label>
                            Select Semester:
                            <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                                <option value="">Select a semester</option>
                                {[...Array(8).keys()].map((num) => (
                                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                                ))}
                            </select>
                        </label>
                    </>
                )}

                <div className="button-group">
                    <button type="button" onClick={handleReset}>Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default HomePage;
