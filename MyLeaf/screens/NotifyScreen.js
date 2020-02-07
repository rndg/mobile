import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    ActivityIndicator,
    Switch,
    Button,
} from 'react-native';
import {
    Header,
    Left,
    Icon
} from 'native-base';

import DateTimePicker from "react-native-modal-datetime-picker";

import ProgressBarAnimated from 'react-native-progress-bar-animated';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

var PushNotification = require('react-native-push-notification');

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        if (notification.data.id == 2) {
            console.log( 'NOTIFICATION:', notification );
            PushNotification.localNotificationSchedule({
                message: "Chiaraaa", // (required)
                date: new Date(Date.now() + 15000), // in 60 secs
                userInfo: { id: '2' },
                //repeatType: 'time',
            });
        }
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

class NotifyScreen extends Component {    

    state = {
        selectedValue: null,
        data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        load: true,
        switchValueReminder: false,
        switchValueNot: false,
        id_user: 1,
        isDateTimePickerVisible: false,
        orario: '2019-12-19T10:55:20.724Z'
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    
    handleDatePicked = dateTime => {
        this.setState({switchValueReminder: true});
        PushNotification.localNotificationSchedule({
            message: "Questo è un promemoria", // (required)
            date: dateTime, // in 60 secs
            userInfo: { id: '1' },
            repeatType: 'day',
        });
        console.log("A date has been picked: ", dateTime);
        this.hideDateTimePicker();
    };

    toggleSwitchReminder = (value) => {
        this.setState({switchValueReminder: value});
        if (!value){
            this.delReminder();
        } else {
            this.setState({switchValueReminder: false});
            this.showDateTimePicker();
        }
    }

    toggleSwitchNot = (value) => {
        this.setState({switchValueNot: value});
        if (!value){
            this.delReminderNot();
        } else {
            this.notify();
        }
    }

    notify() {
        PushNotification.localNotificationSchedule({
            message: "Chiaraaa", // (required)
            date: new Date(Date.now()), // in 60 secs
            userInfo: { id: '2' },
            repeatType: 'minute',
        });
    }

    delAllNotifications(){
        PushNotification.cancelAllLocalNotifications()
        this.setState({switchValueReminder: false});
        this.setState({switchValueNot: false});

    }

    delReminder(){
        PushNotification.cancelLocalNotifications({id: '1'});
    }

    delNot(){
        PushNotification.cancelLocalNotifications({id: '2'});
    }


    renderPage() {
        return (
            <View style={styles.containerMain}>
            <Image source = {require('../imgs/grassBack1.jpg')} style = {styles.bkImage}/>
                <Header style={styles.header}>
                    <Left>
                        <TouchableOpacity onPress = {()=> {
                            this.props.navigation.goBack(null);
                            this.setState({toUpdate: !this.state.toUpdate});
                            }
                            }>
                            <View style={{paddingHorizontal: 10}}>
                                <Icon name="ios-arrow-back" size={10}/>
                            </View>
                        </TouchableOpacity>
                    </Left>
                </Header>
                <View style={styles.container}>
                    <View style={styles.containerBody}>
                        <ScrollView style={[styles.scrollview, styles.scrollPadd]} bounces={false} showsVerticalScrollIndicator={false}>
                        <Image
                            style={styles.bkImage}
                            source={require('../imgs/grassBack1.jpg')}
                        />  
                            <View style={styles.body}>
                                <View style={styles.containerText}>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non massa vitae nunc luctus interdum. Sed rutrum sit amet tortor ut congue. Vestibulum vitae porta diam. Aliquam facilisis sem a justo aliquam euismod. Curabitur facilisis elit eget odio tristique auctor. Quisque cursus enim magna. Aliquam viverra placerat erat, quis sollicitudin risus sodales ac. Nam fermentum ex ut suscipit gravida. Praesent nec eros hendrerit mi commodo accumsan ut eu velit. Nunc vehicula faucibus diam, nec molestie nunc placerat ut. In sagittis diam vel orci convallis fermentum.</Text>
                                </View>
                                <View style={styles.containerDay}>
                                    <View style={[styles.containerText, styles.row]}>
                                        <Text>Promemoria</Text>
                                        <Switch
                                        ios_backgroundColor = {'red'}
                                        onValueChange = {
                                            this.toggleSwitchReminder
                                        }
                                        value = {this.state.switchValueReminder}/>
                                    </View>
                                </View>
                                <View style={styles.containerDay}>
                                    <View style={[styles.containerText, styles.row]}>
                                        <Text>Promemoria piante</Text>
                                        <Switch
                                        ios_backgroundColor = {'red'}
                                        onValueChange = {this.toggleSwitchNot}
                                        value = {this.state.switchValueNot}/>
                                    </View>
                                    <AwesomeButtonRick type="anchor" onPress = {()=> {
                                        this.dayPicker.show();
                                        }}>
                                        Scegli un orario
                                    </AwesomeButtonRick>
                                </View>
                                <View style={styles.containerButtons2}>
                                    <View style={styles.containerButton2}>
                                        <AwesomeButtonRick type="anchor" stretch 
                                            onPress = {()=> {
                                                this.notify();
                                            }
                                            }>
                                            <Text> Crea allarmi </Text>
                                        </AwesomeButtonRick>
                                    </View>
                                    <View style={styles.containerButton2}>
                                        <AwesomeButtonRick type="anchor" stretch 
                                            backgroundActive="rgba(153, 47, 40, 1)"	//quando è premuto
                                            backgroundColor="rgba(180, 51, 33, 1)"	//quando è normale
                                            backgroundDarker="rgba(112, 38, 33, 1)"	//bordino del tasto
                                            borderColor="rgba(112, 38, 33, 1)"		//bordo frontale bottone
                                            onPress={() => {
                                                this.delAllNotifications();
                                            }
                                            }> 
                                            <Text> Delete Notification </Text>
                                        </AwesomeButtonRick>
                                    </View>
                                </View>
                                <DateTimePicker
                                    mode = {'time'}
                                    locale="en_GB"
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this.handleDatePicked}
                                    onCancel={this.hideDateTimePicker}
                                    date={new Date(Date.now())}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const { load } = (this.state.load);
        if(!this.state.load) { return (
            <View style={styles.loadingIndicator}>
                <ActivityIndicator/>
            </View>
        )}
        return this.renderPage();
    }
}

export default NotifyScreen;

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
    },
    containerNew: {
		flex: 1,
		alignItems:'center',
	},
    header: {
        backgroundColor: '#45803b',
        shadowColor: "#000",
        shadowOffset: {
			width: 0,
			height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderBottomWidth: 5,
        borderBottomColor: 'rgba(135, 181, 106,1)' ,
    },
    scrollview: {
		flex: 1,
		backgroundColor: 'transparent',
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
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    containerText: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        paddingVertical: 60,
    },
    containerDay: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        //paddingVertical: 60,
    },
    body:{
        flex: 1,
        backgroundColor: 'transparent',
        width: 300,
        alignSelf: "center",
    },
    loadingIndicator:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(92, 145, 28, 1)',
    },
    containerButton2:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        height: 150,
        width: '100%',
    },
    containerButtons2:{
        flex: 3,
        alignContent: 'center',
        justifyContent: 'space-around',
		width: 300,
		paddingBottom: 20,
    },
    scrollPadd: {
		paddingVertical: 10,
	},
    
});

