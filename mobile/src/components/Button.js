// Button component for the Citizen Voting Platform mobile app

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled && styles.buttonDisabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#6c757d',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Button;
