// Navbar component for the Citizen Voting Platform mobile app

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Navbar = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.navItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Vote')}>
                <Text style={styles.navItem}>Vote</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.navItem}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#333',
    },
    navItem: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Navbar;
