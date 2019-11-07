//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class WikiOutDoorHomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>WikiOutDoorHomeScreen</Text>
            </View>
        );
    }
}
export default WikiOutDoorHomeScreen;


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
