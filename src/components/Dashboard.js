// src/components/HeaderSection.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../styles/Dashboard.css';

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-section">
      <nav>
        <Link to="#" className="logo" onClick={toggleMenu}>
        </Link>
        <ul className={menuOpen ? 'show' : ''}>
          <li><a className="active" href="/">PYQ</a></li>
          <li><a href="/books">BOOKS</a></li>
        </ul>
        <label id="icon" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </label>
      </nav>
    </div>
  );
};

export default HeaderSection;
