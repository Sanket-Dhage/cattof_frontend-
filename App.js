import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProofGenerator from './components/ProofGenerator';
import ActivityVerifier from './components/ActivityVerifier';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catoff-Reclaim Integration</Text>
      <ProofGenerator />
      <ActivityVerifier />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
