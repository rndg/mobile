import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Header,
    Left,
    Icon
} from 'native-base';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";


class WikiIndoorHomeScreen extends Component {
    render() {
        return (
            <View style={styles.containerMain}>
                <Image source = {require('../imgs/carpetBlue.jpg')} style = {styles.bkImage}/>
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
                <View style={styles.container}>
                    <View style={styles.upSpace}>    
                    </View>
                    <View style={styles.containerBody}>
                        <View style={styles.containerText}>
                            <Image
                                style={styles.bkImage}
                                source={require('../imgs/woodBack.jpeg')}
                            /> 
                            <Text style={styles.textComp}>
                                This is the wiki section. Here you can explore the types of plants supported by the application. You will find all the information regarding your favourite plants divided by the area in which it grows and then divided by type.
                            </Text>
                        </View>
                        <View style={styles.containerButtons}>
                            <View style={styles.containerButton1}>
                                <AwesomeButtonRick type="anchor" stretch
                                    ExtraContent={
                                        <Image
                                            style={styles.bkImage}
                                            source={require('../imgs/woodBack.jpeg')}
                                        /> 
                                    }
                                    borderRadius={0}
                                    backgroundDarker="rgba(80, 48, 28, 1)"	//bordino del tasto
                                    borderColor="rgba(80, 48, 28, 1)"
                                    onPress={() => 
                                        this.props.navigation.navigate('WikiOrnamental')}>
                                    <Text>Piante Ornamentali</Text>
                                </AwesomeButtonRick>
                            </View>
                            <View style={styles.containerButton2}>
                                <AwesomeButtonRick type="anchor" stretch
                                    ExtraContent={
                                        <Image
                                            style={styles.bkImage}
                                            source={require('../imgs/woodBack.jpeg')}
                                        /> 
                                    }
                                    borderRadius={0}
                                    backgroundDarker="rgba(80, 48, 28, 1)"	//bordino del tasto
                                    borderColor="rgba(80, 48, 28, 1)"
                                    onPress={() => 
                                        this.props.navigation.navigate('WikiFlowering')}>
                                    <Text>Piante Floricole</Text>
                                </AwesomeButtonRick>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default WikiIndoorHomeScreen;

// define your styles
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(92, 145, 28, 1)',
    },
    container: {
        flex: 1,
    },
    containerText: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
        paddingHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
			width: 0,
			height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderWidth: 3,
        borderBottomWidth: 10,
        borderColor: 'rgba(80, 48, 28, 1)',
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
    containerButtons:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-around',
        width: 300,
        height:50,
    },
    containerButton1:{
        flex: 1,
        justifyContent: 'center',
    },
    containerButton2:{
		flex: 1,
    },
    containerBody: {
        flex: 1,
        alignItems: 'center',
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
    upSpace: {
        height:50,
        width: 300,
    },
    textComp: {
        flex: 1,
        textAlign: 'center',
    },
});
