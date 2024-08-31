// API service for the Citizen Voting Platform

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const castVote = async (voteData) => {
    const response = await fetch(`${API_URL}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voteData),
    });
    return response.json();
};

export const getHealthData = async (userId) => {
    const response = await fetch(`${API_URL}/health?user_id=${userId}`);
    return response.json();
};
