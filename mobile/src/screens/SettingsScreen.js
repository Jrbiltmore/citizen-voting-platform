// SettingsScreen for the Citizen Voting Platform mobile app

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Button title="Change Password" onPress={() => alert('Change Password Clicked')} />
            <Button title="Logout" onPress={() => alert('Logout Clicked')} style={styles.button} />
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
    button: {
        marginTop: 20,
    },
});

export default SettingsScreen;
