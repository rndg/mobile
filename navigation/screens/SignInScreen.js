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
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

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

	login = (email, pass) => {
		fetch('http://192.168.64.2/MyLeaf/Login.php', {
      	method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            email: email,
            password: pass
      	})
    	})
      	.then((response) => response.json())
      	.then((responseJson) => {
			this.storeToken(JSON.stringify(responseJson));
      	});
	};

	render(){
		return (
            <View style = {styles.container}>
                <ImageBackground source = {require('../imgs/backScreenSx.png')} style = {styles.backgroundImage}>
                    <View style = {styles.content}>
                        <View style = {styles.inputContainer}>
                            <TextInput 
							style = {styles.input} 
							placeholder = 'email'
							onChangeText={data => this.setState({ email: data })}
							/>
                            <TextInput 
							secureTextEntry = {true} 
							style = {styles.input} 
							placeholder = 'password'
							onChangeText={data => this.setState({ pass: data })}
							/>
                            <TouchableOpacity 
							onPress={() => this.login(this.state.email, this.state.pass)}
                            style = {styles.buttonContainer}>
                                <Text style = {styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
		);
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
    inputContainer: {
        margin: 20,
        marginBottom: 0, 
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,1)'
    },
    buttonContainer: {
        margin: 20,
        padding: 20,
        alignSelf: 'stretch',
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.6)'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});