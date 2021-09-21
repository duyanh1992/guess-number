import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = function({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7287b',
        paddingTop: 36
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 17
    }
});


export default Header;