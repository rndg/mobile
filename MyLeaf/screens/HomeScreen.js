import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground
} from 'react-native';

import {
    Header,
    Left,
    Right,
    Icon
} from 'native-base'

class HomeScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ fontSize:24, color:tintColor}} />
        )
    }

    render () {
        return (
            <ImageBackground source={require('../imgs/backScreenFull.jpg')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text>HomeScreen</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: '#eb9f34',
	},
	backgroundImage: {
    	flex: 1,
    	width : '100%'
    },
	text: {
		fontSize:30,
		color: '#fff'
	},
});
