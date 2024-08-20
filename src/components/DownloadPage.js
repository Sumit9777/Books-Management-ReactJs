// src/DownloadPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/DownloadPage.css';

const DownloadPage = () => {
    const location = useLocation();
    const { course, branch, semester } = location.state;

    const subjects = [
        {
            name: 'Internet Programming',
            papers: [
                { year: 2020, month: 'May' },
                { year: 2020, month: 'December' },
                { year: 2022, month: 'May' },
                { year: 2023, month: 'May' },
                { year: 2023, month: 'December' }
            ]
        },
        {
            name: 'Automata',
            papers: [
                { year: 2020, month: 'May' },
                { year: 2020, month: 'December' },
                { year: 2022, month: 'May' },
                { year: 2022, month: 'December' },
                { year: 2023, month: 'May' },
                { year: 2023, month: 'December' }
            ]
        },
        {
            name: 'COA',
            papers: [
                { year: 2020, month: 'May' },
                { year: 2020, month: 'December' },
                { year: 2022, month: 'May' },
                { year: 2022, month: 'December' },
                { year: 2023, month: 'May' },
                { year: 2023, month: 'December' }
            ]
        }
    ];

    const handleDownload = async (subject, year, month) => {
        try {
            const response = await axios.get(`http://localhost:5000/download`, {
                params: {
                    subject,
                    year,
                    month,
                    course,
                    branch,
                    semester
                },
                responseType: 'blob' // Important for downloading files
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${subject}_${year}_${month}.pdf`); // Define the file name
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading the file', error);
        }
    };

    return (
        <div className="download-page">
            <h1>Download Question Papers</h1>
            <h2>Course: {course}, Branch: {branch}, Semester: {semester}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject, index) =>
                        subject.papers.map((paper, paperIndex) => (
                            <tr key={`${index}-${paperIndex}`}>
                                {paperIndex === 0 && (
                                    <td rowSpan={subject.papers.length}>{subject.name}</td>
                                )}
                                <td>{paper.year}</td>
                                <td>{paper.month}</td>
                                <td>
                                    <button
                                        className="download-button"
                                        onClick={() => handleDownload(subject.name, paper.year, paper.month)}
                                    >
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DownloadPage;
