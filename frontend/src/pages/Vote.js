// Vote page for the Citizen Voting Platform

import React, { useState } from 'react';
import { castVote } from '../services/api';
import './Vote.css';

const Vote = ({ userId }) => {
    const [billId, setBillId] = useState('');
    const [choice, setChoice] = useState('');
    const [message, setMessage] = useState('');

    const handleVote = async () => {
        if (billId && choice) {
            const result = await castVote({ user_id: userId, bill_id: billId, choice });
            setMessage(result.message);
        } else {
            setMessage('Please enter a bill ID and choose an option.');
        }
    };

    return (
        <div className="vote-page">
            <h2>Vote on a Bill</h2>
            <input
                type="text"
                placeholder="Enter Bill ID"
                value={billId}
                onChange={(e) => setBillId(e.target.value)}
            />
            <div className="choices">
                <label>
                    <input
                        type="radio"
                        name="choice"
                        value="yes"
                        checked={choice === 'yes'}
                        onChange={() => setChoice('yes')}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        name="choice"
                        value="no"
                        checked={choice === 'no'}
                        onChange={() => setChoice('no')}
                    />
                    No
                </label>
            </div>
            <button onClick={handleVote}>Submit Vote</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Vote;
