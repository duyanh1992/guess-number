import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GuessNumber from './components/GuessNumber';

export default function App() {
  return (
    <View style={styles.screen}>
      <GuessNumber />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
