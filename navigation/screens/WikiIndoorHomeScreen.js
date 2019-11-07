//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class WikiIndoorHomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>WikiIndoorHomeScreen</Text>
            </View>
        );
    }
}

export default WikiIndoorHomeScreen;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
