// Unit tests for the main App component of the Citizen Voting Platform

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test('renders the home page link', () => {
    render(
        <Router>
            <App />
        </Router>
    );
    const linkElement = screen.getByText(/Vote Now/i);
    expect(linkElement).toBeInTheDocument();
});

test('navigates to vote page', () => {
    render(
        <Router>
            <App />
        </Router>
    );
    const voteLink = screen.getByText(/Vote/i);
    voteLink.click();
    expect(screen.getByText(/Submit Vote/i)).toBeInTheDocument();
});
