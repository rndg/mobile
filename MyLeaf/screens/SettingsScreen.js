import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import {
    Header,
    Left,
    Icon
} from 'native-base';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";


import AsyncStorage from '@react-native-community/async-storage';


class SettingsScreen extends Component {

    signOut = async()=>{
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoading')
    }
    
    render () {

        return (
            <View style={styles.container}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => goBack()}/>
                    </Left>
                </Header>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>SettingsScreen</Text>
                    <Button title="SignOut" onPress={() => this.signOut} />
                </View>
            </View>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});
