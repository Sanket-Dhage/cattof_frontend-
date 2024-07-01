import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ProofGenerator = () => {
  const [data, setData] = useState('');
  const [proof, setProof] = useState(null);

  const handleGenerateProof = async () => {
    try {
      const response = await axios.post('http://192.168.56.1:3000/zkproof/generate', { data });
      setProof(response.data.proof);
    } catch (error) {
      console.error('Error generating proof:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Data:</Text>
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
      />
      <Button
        title="Generate Proof"
        onPress={handleGenerateProof}
      />
      {proof && <Text style={styles.proof}>Generated Proof: {proof}</Text>}
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  proof: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default ProofGenerator;
