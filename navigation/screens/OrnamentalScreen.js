//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class OrnamentalScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>OrnamentalScreen</Text>
            </View>
        );
    }
}
export default OrnamentalScreen;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
