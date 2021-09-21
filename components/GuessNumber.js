import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import StartGame from './screen/StartGame';

const GuessNumber = function() {
    return (
        <View style={styles.main}>
            <Header title="Guess a Number" />
            <StartGame />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: '100%'
    }
});

export default GuessNumber;