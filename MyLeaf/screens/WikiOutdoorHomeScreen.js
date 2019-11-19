import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    Button,
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
                <View style={styles.containerBody}>
                    <View style={styles.container}>
                        <View style={styles.containerText}>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non massa vitae nunc luctus interdum. Sed rutrum sit amet tortor ut congue. Vestibulum vitae porta diam. Aliquam facilisis sem a justo aliquam euismod. Curabitur facilisis elit eget odio tristique auctor. Quisque cursus enim magna. Aliquam viverra placerat erat, quis sollicitudin risus sodales ac. Nam fermentum ex ut suscipit gravida. Praesent nec eros hendrerit mi commodo accumsan ut eu velit. Nunc vehicula faucibus diam, nec molestie nunc placerat ut. In sagittis diam vel orci convallis fermentum.</Text>
                        </View>
                        <View style={styles.containerButtons}>
                            <View style={styles.containerButton}>
                                <AwesomeButtonRick type="anchor" stretch
                                    onPress={() => 
                                        this.props.navigation.navigate('WikiHorticultural')}>
                                    <Text>Piante Orticole</Text>
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
        backgroundColor: '#2c3e50',
    },
    container: {
        flex: 1,
    },
    containerText: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-around',
        width: 300,
    },
    header: {
        backgroundColor: '#45803b',
    },
    containerButtons:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-around',
        width: 300,
        height:50,
    },
    containerButton:{
        flex: 1,
        justifyContent: 'center',
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
});
