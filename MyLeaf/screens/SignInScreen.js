import React, { Component } from 'react';
import { 
    AppRegistry, 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    Navigator, 
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {
    Header,
    Left,
    Icon
} from 'native-base';

import {login} from '../functions/dbRequest';

import AsyncStorage from '@react-native-community/async-storage';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

import AuthLoading from './AuthLoadingScreen';

export default class SignInScreen extends Component { 

	state = {
        email: '',
        pass: '',
        userData: [],
        isLoading: false,
    };

	async storeToken(user) {
		try {
			await AsyncStorage.setItem("userData", user);
            this.props.navigation.navigate('AuthLoading');
		} catch (error) {
			console.log("Something went wrong", error);
		}
	}

	completeLogin() {
        login(this.state.email, this.state.pass).then(data => {
            if (data == 'Login Fail'){
                this.setState({ pass: '' });
                Alert.alert(
                    'Credenziali errate'
                );
            } else {
                this.storeToken(JSON.stringify(data));              
            }
        });
    }

	render(){

		return (

            <View style = {styles.containerMain}>
                <Image source = {require('../imgs/grassBack1.jpg')} style = {styles.bkImage}/>
                    <Header style={styles.header}>
                        <Left>
                            <TouchableOpacity onPress = {()=> {
                                this.props.navigation.goBack(null);
                                }
                                }>
                                <View style={{paddingHorizontal: 10}}>
                                    <Icon name="ios-arrow-back" size={10}/>
                                </View>
                            </TouchableOpacity>
                        </Left>
                    </Header>
                    <View style = {styles.containerBody}>
                        <View style={styles.container}></View>
                        <View style = {styles.inputContainer}>
                            <TextInput 
                                style = {[styles.input, styles.fontComic]}
                                placeholder = 'email'
                                placeholderTextColor= 'rgba(123,223,69, 0.3)'
                                onChangeText={data => this.setState({ email: data })}
							/>
                            <TextInput 
                                secureTextEntry = {true} 
                                style = {[styles.input, styles.fontComic]}
                                placeholder = 'password'
                                placeholderTextColor= 'rgba(123,223,69, 0.3)'
                                onChangeText={data => this.setState({ pass: data })}
							/>
                            <AwesomeButtonRick type="anchor" stretch
                                onPress={() => 
                                    this.completeLogin()
                                }
                            >
                                <Text>Sign In</Text>
                            </AwesomeButtonRick>
                        </View>
                        <View style={styles.container}></View>                            
                    </View>
            </View>
		);
    }
};

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2c3e50',
    },
    containerBody: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#45803b',
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
    inputContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 300,
        height:50,
    },
    input: {
        height: 50,
        width: 300,
        //margin: 20,
        paddingHorizontal:20,
        borderRadius: 20,
        backgroundColor: '#45803b',
        alignItems: 'center',
    },
    fontComic: {
		fontSize: 15,
		fontFamily: 'Hey Comic',
	},
});