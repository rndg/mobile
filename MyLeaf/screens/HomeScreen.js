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

import {
    rndBug
} from '../functions/function';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

import BouncingBalls from 'react-native-bouncing-ball';

import PushNotificationIOS from "@react-native-community/push-notification-ios";

var PushNotification = require('react-native-push-notification');

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * IOS ONLY: (optional) default: true
      * - Specified if permissions will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
});

class HomeScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ fontSize:24, color:tintColor}} />
        )
    }

    notify() {
        PushNotification.localNotificationSchedule({
            message: "Ale GAY", // (required)
            date: new Date(Date.now() + (15 * 1000)) // in 60 secs
        });
    }

    render () {
        return (
            <View style={styles.containerMain}>
            <Image source = {require('../imgs/grassBack1.jpg')} style = {styles.bkImage}/>
                <View style={styles.containerBody}>
                    <BouncingBalls
                        amount={4}
                        animationDuration={2000}
                        minSpeed={200}
                        maxSpeed={200}
                        minSize={20}
                        maxSize={50}
                        imageBall={require('../imgs/bee1.png')}
                    />
                    <AwesomeButtonRick type="anchor" onPress = {()=> {
                            this.notify();
                            }}>
                            NOTIFY IN 15 SEC
                    </AwesomeButtonRick>
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
