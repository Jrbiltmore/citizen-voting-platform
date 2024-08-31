// VoteScreen for the Citizen Voting Platform mobile app

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { castVote } from '../services/api';

const VoteScreen = () => {
    const [billId, setBillId] = useState('');
    const [choice, setChoice] = useState('');

    const handleVote = async () => {
        const voteData = { user_id: 1, bill_id: billId, choice };
        const result = await castVote(voteData);
        console.log(result);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cast Your Vote</Text>
            <TextInput
                style={styles.input}
                placeholder="Bill ID"
                value={billId}
                onChangeText={setBillId}
            />
            <TextInput
                style={styles.input}
                placeholder="Choice (yes/no)"
                value={choice}
                onChangeText={setChoice}
            />
            <Button title="Submit Vote" onPress={handleVote} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
    input: { width: '80%', padding: 8, margin: 10, borderWidth: 1, borderRadius: 5 }
});

export default VoteScreen;
