import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from 'react-native';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

class WelcomeScreen extends Component {
    render () {
        

        return (
            <View style={styles.containerMain}>
            <Image source={require('../imgs/grassBack1.jpg')} style={styles.bkImage}/>
                <View style={styles.container}>
                    <View style={styles.container}></View>
                    <View style={styles.container}></View>
                    <View style={styles.containerButtons}>
                        <AwesomeButtonRick type="anchor" stretch
                            onPress={() => 
                                this.props.navigation.navigate('SignIn')
                            }>
                            <Text>Sign In</Text>
                        </AwesomeButtonRick>
                        <AwesomeButtonRick type="anchor" stretch
                            onPress={() => 
                                this.props.navigation.navigate('SignUp')
                            }>
                            <Text>Sign Up</Text>
                        </AwesomeButtonRick>
                    </View>
                </View>             
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
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
    containerButtons:{
		flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 300,
	}
});
