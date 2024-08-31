// HealthStatus component for the Citizen Voting Platform mobile app

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthStatus = ({ riskLevel }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Health Status</Text>
            <Text style={styles.risk}>Macular Degeneration Risk: {riskLevel.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    risk: {
        fontSize: 16,
        color: '#ff0000',
    },
});

export default HealthStatus;
