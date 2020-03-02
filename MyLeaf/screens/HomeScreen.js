import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Easing
} from 'react-native';

import {
    Header,
    Left,
    Right,
    Icon
} from 'native-base';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

import AsyncStorage from '@react-native-community/async-storage';


class HomeScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ fontSize:24, color:tintColor}} />
        )
    }

    clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }

    render () {
        return (
            <View style={styles.containerMain}>
            <Image source = {require('../imgs/carpetGreen.jpg')} style = {styles.bkImage}/>
                <View style={styles.containerBody}>
                    <AwesomeButtonRick type="anchor" onPress = {()=> {
                            this.notify();
                            }}>
                            NOTIFY IN 15 SEC
                    </AwesomeButtonRick>
                    <Button onPress={this.clearAsyncStorage} title={'clear sync'}>
                        <Text>Clear Async Storage</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(92, 145, 28, 1)',
    },
    container: {
		flex: 1,
    },
    containerBody: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
	bkImage:{
		position: "absolute",
		resizeMode: "repeat",
		height: '100%',
		width: undefined,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
    },
});
