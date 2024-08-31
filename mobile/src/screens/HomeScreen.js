// HomeScreen for the Citizen Voting Platform mobile app

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Citizen Voting Platform</Text>
            <Text style={styles.subtitle}>Engage in legislative voting and monitor your health.</Text>
            <Button title="Go to Vote" onPress={() => navigation.navigate('VoteScreen')} />
            <Button title="Go to Profile" onPress={() => navigation.navigate('ProfileScreen')} style={styles.button} />
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
        fontSize: 28,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 40,
    },
    button: {
        marginTop: 20,
    },
});

export default HomeScreen;
