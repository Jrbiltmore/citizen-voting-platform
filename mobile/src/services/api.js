// API service for the Citizen Voting Platform mobile app

const API_URL = process.env.API_URL || 'http://localhost:5000';

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        return response.json();
    } catch (error) {
        console.error('Error registering user:', error);
        return { error: 'Failed to register user.' };
    }
};

export const castVote = async (voteData) => {
    try {
        const response = await fetch(`${API_URL}/vote`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(voteData),
        });
        return response.json();
    } catch (error) {
        console.error('Error casting vote:', error);
        return { error: 'Failed to cast vote.' };
    }
};

export const getHealthData = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/health?user_id=${userId}`);
        return response.json();
    } catch (error) {
        console.error('Error fetching health data:', error);
        return { error: 'Failed to fetch health data.' };
    }
};
