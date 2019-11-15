import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    Left,
    Icon
} from 'native-base';

import {
	setCustomTextInput,
	setCustomText,
} from 'react-native-global-props';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";


// Setting default for all TextInput components.
const customTextInputProps = {
	underlineColorAndroid: 'rgba(0,0,0,0)',
	style: {
		fontSize: 15,
		fontFamily: 'Hey Comic',
	}
};

// Setting default styles for all Text components.
const customTextProps = {
	style: {
		fontSize: 15,
		fontFamily: 'Hey Comic',
		//alignSelf: 'center',
	}
};

class AchievScreen extends Component {
    render () {
        setCustomText(customTextProps);
        setCustomTextInput(customTextInputProps);
        
        const { goBack } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <TouchableOpacity onPress = {()=> goBack()}>
                            <View style={{paddingHorizontal: 10}}>
                                <Icon name="ios-arrow-back" size={10}/>
                            </View>
                        </TouchableOpacity>
                    </Left>
                </Header>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>AchievScreen</Text>
                    <Button title="Back" onPress={() => goBack()} />
                </View>
            </View>
        );
    }
    
}
export default AchievScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#45803b',
    },
});