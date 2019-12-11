import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import {
    Header,
    Left,
    Icon
} from 'native-base';

import {signUp} from '../functions/dbRequest';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

class SignUpScreen extends Component {

    state = {
		username: '',
        email: '',
        pass: '',
		passConf: '',
    };

    controlSignUp() {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/ ;

        if (this.state.pass != this.state.passConf){
            this.setState({ pass: '' });
            this.setState({ passConf: '' });
            Alert.alert(
                'Password non coincidenti',
                'Reinserire le password'
            );
        } else if (reg.test(this.state.email) === false) {
            Alert.alert(
                'Email non valida',
                'Reinserire la mail'
            );
        } else {
            signUp(this.state.username, this.state.email, this.state.pass, this.state.passConf).then(data => {
                if (data == 'Already existing'){
                    Alert.alert(
                        'Email già registrata',
                        'Reinserire la mail'
                    );
                } else if (data == 'Registration completed'){
                    Alert.alert(
                        'Utente Registrato con successo'
                    );
                    this.props.navigation.goBack(null);
                } else {
                    Alert.alert(
                        'Server Error'
                    );
                }
            });
        }
    }

    render () {

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
                                placeholder = 'Username'
                                placeholderTextColor= 'rgba(123,223,69, 0.3)'
                                onChangeText={data => this.setState({ username: data })} />
                            <TextInput 
                                style = {[styles.input, styles.fontComic]}
                                placeholder = 'Email'
                                placeholderTextColor= 'rgba(123,223,69, 0.3)'
                                onChangeText={data => this.setState({ email: data })} />
                            <TextInput 
                                secureTextEntry = {true} 
                                style = {[styles.input, styles.fontComic]}
                                placeholder = 'Password'
                                placeholderTextColor= 'rgba(123,223,69, 0.3)'
                                onChangeText={data => this.setState({ pass: data })} />
                            <TextInput 
                                secureTextEntry = {true} 
                                style = {[styles.input, styles.fontComic]}
                                placeholder = 'Confirm Password'
                                placeholderTextColor= 'rgba(123,223,69, 0.3)'
                                onChangeText={data => this.setState({ passConf: data })} />  
                            <AwesomeButtonRick type="anchor" stretch
                                onPress={() => 
                                    this.controlSignUp()
                                }
                            >
                                <Text>Sign Up</Text>
                            </AwesomeButtonRick>                   
                        </View>
                        <View style={styles.container}></View>
                    </View>
            </View>
		);
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(92, 145, 28, 1)',
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