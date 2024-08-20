// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import BooksPage from './components/BooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import DownloadPage from './components/DownloadPage';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Dashboard />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/books/:id" element={<BookDetailsPage />} />
                    <Route path="/download" element={<DownloadPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
