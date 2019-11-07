import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    Left,
    Icon
} from 'native-base';

import AsyncStorage from '@react-native-community/async-storage';

class ProfileScreen extends Component {

    signOut = async()=>{
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }
    
    render () {
        const { goBack } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header>
                    <Left>
                        <TouchableOpacity onPress = {()=> goBack()}>
                            <View style={{paddingHorizontal: 10}}>
                                <Icon name="ios-arrow-back" size={10}/>
                            </View>
                        </TouchableOpacity>
                    </Left>
                </Header>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>ProfileScreen</Text>
                    <Button title="SignOut" onPress={() => this.signOut()} />
                </View>
            </View>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});
