// Home page for the Citizen Voting Platform

import React from 'react';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
    const handleVote = () => {
        // Navigate to voting page
    };

    return (
        <div className="home-page">
            <h1>Welcome to the Citizen Voting Platform</h1>
            <p>Engage in legislative voting and contribute to democracy.</p>
            <Button label="Vote Now" onClick={handleVote} />
        </div>
    );
};

export default Home;
