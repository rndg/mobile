import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    Button,
    TouchableOpacity,
    Image,
    FlatList,
	ScrollView,
} from 'react-native';
import {
    Header,
    Left,
    Icon
} from 'native-base';

import {
	myPlants,
	selectPlants,
	uploadPlantToServer,
} from '../functions/dbRequest';

import {
	plantImg,
} from '../functions/function'

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";


class FloweringScreen extends Component {

    state = {
        isLoading: true,
		dataSource: [],
		data: [ 
			{ id: "00", name: "Relâmpago McQueen" },
			{ id: "01", name: "Agente Tom Mate" },
			{ id: "02", name: "Doc Hudson" },
			{ id: "03", name: "Cruz Ramirez" },
			{ id: "04", name: "Cruz Ramirez" },
			{ id: "05", name: "Relâmpago McQueen" },
			{ id: "06", name: "Agente Tom Mate" },
			
        ],
		plant: {
			id: null,
			name: null,
		},
		plants: [],
		plantName: '',
		id_plant: 4,
		id_user: 1,
		email: '',
		password: '',
		userData: [],
		type: 'Outdoor',
    }
    
    clearParams = () => {
        this.props.navigation.setParams({id: null, from: null});
    }
    
    render() {
        {
            item = this.props.navigation.getParam('id');
            from = this.props.navigation.getParam('otherParam', 'Somewhere');
        }
        return (
            <View style={styles.containerMain}>
            <Image source = {require('../imgs/grassBack1.jpg')} style = {styles.bkImage}/>
                <Header style={styles.header}>
                    <Left>
                        <TouchableOpacity onPress = {()=> {
                            this.clearParams();
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
                    <View style={styles.containerBody}>
                        <ScrollView style={styles.scrollview} bounces={false}>
                        <Image
                            style={styles.bkImage}
                            source={require('../imgs/grassBack1.jpg')}
                        />  
                            <View style={styles.body}>
                                <View style={styles.containerText}>
                                    <Text>Pianta Orticola: {JSON.stringify(item)} </Text>
                                </View>
                                <View style={styles.plantBox}>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default FloweringScreen;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2c3e50',
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
    },
    scrollview: {
		flex: 1,
		backgroundColor: 'transparent'
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
    plantImage: {
		height: 150,
		width : 150,
    },
    starImage: {
        resizeMode: 'stretch',
		height: 30,
		width : 30
	},
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    col:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plantName: {
        flex: 1,
        top: 30,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    stars: {
        flex: 1,
        flexDirection: 'row',
    },
    plantBox: {
        flex: 1,
        backgroundColor: 'transparent',
		width : 300
    },
    containerText: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
        paddingVertical: 60,
    },
    body:{
        //alignItems: 'center', 
        backgroundColor: 'transparent'
    }
    
});
