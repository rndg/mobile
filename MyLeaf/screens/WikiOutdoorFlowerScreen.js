import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity,
    Image,
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

import FastImage from 'react-native-fast-image';


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

    _goback(){
        this.props.navigation.goBack(null);
        this.props.navigation.goBack(null);
        this.props.navigation.goBack(null);
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
            <Image source = {require('../imgs/carpetRed3.jpg')} style = {styles.bkImage}/>
                <Header style={styles.header}>
                    <Left>
                        <TouchableOpacity onPress = {()=> {
                            if (from == 'Outdoor'){  
                                this.clearParams(); 
                                this._goback();
                            } else {
                                this.clearParams();
                                this.props.navigation.goBack(null);
                            }
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
                            source={require('../imgs/carpetRed3.jpg')}
                        />  
                            <View style={styles.upSpace}>    
                            </View>
                            <View style={styles.containerText}>
                                <Image
                                    style={styles.bkImage}
                                    source={require('../imgs/woodBack.jpeg')}
                                /> 
                                <View style={styles.plantTitle}>
                                    <Text style={styles.textTitle}>{item.name}</Text>
                                </View>
                                <FastImage
                                    style={[styles.plantPicture, styles.padd]}
                                    source={require('../imgs/plantPicture.jpg')}
                                />  
                                <View style={[styles.plantDescr, styles.padd]}>
                                    <Text style={[styles.textSubTitle, styles.textComp]}>Description:</Text>
                                    <Text style={[styles.textComp]}>{JSON.stringify(item)}</Text>
                                </View>
                            </View>
                            <View style={styles.body}>
                                <View style={styles.containerField}>
                                    <Image
                                        style={styles.bkImage}
                                        source={require('../imgs/woodBack.jpeg')}
                                    /> 
                                    <Text style={[styles.textSubTitle, styles.textComp]}>Field1:</Text>
                                    <Text style={styles.textComp}>{JSON.stringify(item)}</Text>
                                </View>
                                <View style={styles.containerField}>
                                    <Image
                                        style={styles.bkImage}
                                        source={require('../imgs/woodBack.jpeg')}
                                    /> 
                                    <Text style={[styles.textSubTitle, styles.textComp]}>Field2:</Text>
                                    <Text style={styles.textComp}>{JSON.stringify(item)}</Text>
                                </View>
                                <View style={styles.containerField}>
                                    <Image
                                        style={styles.bkImage}
                                        source={require('../imgs/woodBack.jpeg')}
                                    /> 
                                    <Text style={[styles.textSubTitle, styles.textComp]}>Field3:</Text>
                                    <Text style={styles.textComp}>{JSON.stringify(item)}</Text>
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
        backgroundColor: 'rgba(92, 145, 28, 1)',
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
    containerField: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
        paddingHorizontal: 5,
        margin: 20,
        borderColor: 'rgba(80, 48, 28, 1)',
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
    body: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
        paddingVertical: 60,
    },
    plantTitle: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
    },
    plantPicture: {
        alignSelf:'center',
        borderRadius:90,
        borderWidth: 3,
        borderColor: 'rgba(255, 0, 0, 0.3)',
        height: 150,
		width : 150,
    },
    plantDescr: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
    },
    plantField: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
    },
    textTitle:{
        textAlign: 'center',
        fontSize: 25,
    },
    textSubTitle: {
        fontSize: 20,
    },
    textSection: {

    },
    padd: {
        paddingVertical: 60,
    },
    upSpace: {
        height:50,
        width: 300,
    },
    textComp: {
        flex: 1,
        textAlign: 'center',
        paddingHorizontal: 5,
    },
});
