import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {signUp} from '../functions/dbRequest'

class SignUpScreen extends Component {

    state = {
		username: '',
        email: '',
        pass: '',
		passConf: '',
    };

    render () {
        return (
            <View style = {styles.container}>
                <ImageBackground source = {require('../image/backScreenSx.jpg')} style = {styles.backgroundImage}>
                    <View style = {styles.content}>
					<View style = {styles.inputContainer}>
                            <TextInput 
                                style = {styles.input} 
                                placeholder = 'Username'
                                onChangeText={data => this.setState({ username: data })} />
                            <TextInput 
                                style = {styles.input} 
                                placeholder = 'Email'
                                onChangeText={data => this.setState({ email: data })} />
                            <TextInput 
                                secureTextEntry = {true} 
                                style = {styles.input} 
                                placeholder = 'Password'
                                onChangeText={data => this.setState({ pass: data })} />
                            <TextInput 
                                secureTextEntry = {true} 
                                style = {styles.input} 
                                placeholder = 'Confirm Password'
                                onChangeText={data => this.setState({ passConf: data })} />                     
                            <TouchableOpacity 
                                onPress={() => signUp(this.state.username, this.state.email, this.state.pass, this.state.passConf)}
                                style = {styles.buttonContainer}>
                            <Text style = {styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
		);
    }
}
export default SignUpScreen;

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