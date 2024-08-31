// Header component for the Citizen Voting Platform

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="navbar-brand">Citizen Voting Platform</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/vote" className="nav-link">Vote</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
