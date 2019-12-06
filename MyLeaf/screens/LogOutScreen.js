import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

class ProfileScreen extends Component {

    constructor(props){
        super(props)
        this.signOut = this.signOut.bind(this);
        this.signOut();
    }

    signOut = async()=>{
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }
    
    render () {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
            </View>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(92, 145, 28, 1)',
    },
});
