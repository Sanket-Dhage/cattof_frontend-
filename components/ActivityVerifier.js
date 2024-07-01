import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ActivityVerifier = () => {
  const [activity, setActivity] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [error, setError] = useState(null);

  const handleVerifyActivity = async () => {
    try {
      const response = await axios.post('http://192.168.56.1:3000/catoff/verify', { activity });
      
      if (response.status === 200) {
        setVerificationResult(response.data.result);
        setError(null);
      } else {
        setError('Failed to verify activity.');
      }
    } catch (error) {
      console.error('Error verifying activity:', error);
      setError('Error verifying activity. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Activity Details:</Text>
      <TextInput
        style={styles.input}
        value={activity}
        onChangeText={setActivity}
        placeholder="Enter activity details..."
        autoCapitalize="none"
        autoCorrect={false}
        multiline
        numberOfLines={4}
      />
      <Button
        title="Verify Activity"
        onPress={handleVerifyActivity}
      />
      {verificationResult !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Verification Result:</Text>
          <Text style={styles.result}>{verificationResult}</Text>
        </View>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  resultContainer: {
    marginTop: 20,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  result: {
    fontSize: 16,
    color: 'blue',
  },
  error: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
});

export default ActivityVerifier;
