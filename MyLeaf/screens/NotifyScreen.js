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

import ReactNativePickerModule from 'react-native-picker-module'

var PushNotification = require('react-native-push-notification');

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        PushNotification.localNotificationSchedule({
            message: "Chiaraaa", // (required)
            date: new Date(Date.now() + 5000), // in 60 secs
            //repeatType: 'time',
        });
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

class AchievScreen extends Component {    

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
        switchValueLun: false,
        alertLun: '',
        switchValueMar: false,
        alertLun: '',
        switchValueMer: false,
        alertLun: '',
        switchValueGio: false,
        alertLun: '',
        switchValueVen: false,
        alertLun: '',
        switchValueSab: false,
        alertLun: '',
        switchValueDom: false,
        alertLun: '',
        id_user: 1,
        isDateTimePickerVisible: false,
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    
    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    toggleSwitchLun = (value) => {
        this.setState({switchValueLun: value});
    }
    toggleSwitchMar = (value) => {
        this.setState({switchValueMar: value});
    }
    toggleSwitchMer = (value) => {
        this.setState({switchValueMer: value});
    }
    toggleSwitchGio = (value) => {
        this.setState({switchValueGio: value});
    }
    toggleSwitchVen = (value) => {
        this.setState({switchValueVen: value});
    }
    toggleSwitchSab = (value) => {
        this.setState({switchValueSab: value});
    }
    toggleSwitchDom = (value) => {
        this.setState({switchValueDom: value});
    }

    notify() {
        PushNotification.localNotificationSchedule({
            message: "Chiaraaa", // (required)
            date: new Date(Date.now()), // in 60 secs
            //repeatType: 'time',
        });
    }

    delNotification(){
        PushNotification.cancelAllLocalNotifications()
    }

    showTimePicked() {
        if (this.state.switchValue) {
            return (
                <Text> is truee </Text>
            )
        }
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
                                        <Text>Lunedì</Text>
                                        <Switch
                                        ios_backgroundColor = {'red'}
                                        onValueChange = {this.toggleSwitchLun}
                                        value = {this.state.switchValueLun}/>
                                    </View>
                                    <AwesomeButtonRick type="anchor" onPress = {()=> {
                                        this.showDateTimePicker();
                                        }}>
                                        Scegli un orario
                                    </AwesomeButtonRick>
                                </View>
                                <View style={styles.containerDay}>
                                    <View style={[styles.containerText, styles.row]}>
                                        <Text>Martedì</Text>
                                        <Switch
                                        ios_backgroundColor = {'red'}
                                        onValueChange = {this.toggleSwitchMar}
                                        value = {this.state.switchValueMar}/>
                                    </View>
                                    <AwesomeButtonRick type="anchor" onPress = {()=> {
                                        this.languagePicker.show();
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
                                                this.delNotification();
                                            }
                                            }> 
                                            <Text> Delete Plant </Text>
                                        </AwesomeButtonRick>
                                    </View>
                                </View>
                                <DateTimePicker
                                    mode = {'time'}
                                    locale="en_GB"
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this.handleDatePicked}
                                    onCancel={this.hideDateTimePicker}
                                />
                            </View>
                        </ScrollView>
                        <ReactNativePickerModule
                            pickerRef={e => this.languagePicker = e}
                            value={this.state.selectedValue}
                            title={"Seleziona ogni quanti giorni"}
                            items={this.state.data}
                            titleStyle={{color:'red'}}
                            onValueChange={(index) => {
                                this.setState({
                                selectedValue: index
                            })
                        }}/>
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

export default AchievScreen;

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

