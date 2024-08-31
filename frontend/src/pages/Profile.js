// Profile page for the Citizen Voting Platform

import React, { useEffect, useState } from 'react';
import { getHealthData } from '../services/api';
import './Profile.css';

const Profile = ({ userId }) => {
    const [healthData, setHealthData] = useState(null);

    useEffect(() => {
        const fetchHealthData = async () => {
            const data = await getHealthData(userId);
            setHealthData(data);
        };
        fetchHealthData();
    }, [userId]);

    return (
        <div className="profile-page">
            <h2>Your Profile</h2>
            {healthData ? (
                <div className="health-data">
                    <p>Macular Degeneration Risk: {healthData.macular_degeneration_risk.toFixed(2)}</p>
                    <p>Last Update: {new Date(healthData.last_update).toLocaleString()}</p>
                </div>
            ) : (
                <p>Loading health data...</p>
            )}
        </div>
    );
};

export default Profile;
