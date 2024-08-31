// ProfileScreen for the Citizen Voting Platform mobile app

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getHealthData } from '../services/api';

const ProfileScreen = ({ userId }) => {
    const [healthData, setHealthData] = useState(null);

    useEffect(() => {
        const fetchHealthData = async () => {
            const data = await getHealthData(userId);
            setHealthData(data);
        };
        fetchHealthData();
    }, [userId]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Profile</Text>
            {healthData ? (
                <View style={styles.healthData}>
                    <Text>Macular Degeneration Risk: {healthData.macular_degeneration_risk.toFixed(2)}</Text>
                    <Text>Last Update: {new Date(healthData.last_update).toLocaleString()}</Text>
                </View>
            ) : (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    healthData: {
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
});

export default ProfileScreen;
