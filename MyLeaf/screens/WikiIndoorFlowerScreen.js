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

    componentDidMount () {
		
		
		myPlants(this.state.id_user, this.state.type).then(data => {
			this.state.isLoading = false;
			this.state.dataSource = data;
			});
			
			fetch('http://192.168.64.2/MyLeaf/selectPlants.php', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
					body: JSON.stringify({
						type: 'Outdoor'
					})
			})
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					plants: responseJson
				});
			});
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
            <Image source = {require('../imgs/grassBack1.jpg')} style = {styles.bkImage}/>
                <Header style={styles.header}>
                    <Left>
                        <TouchableOpacity onPress = {()=> {
                                if (from == 'Indoor'){   
                                    this.clearParams();
                                    this._goback();
                                } else {
                                    this.clearParams();
                                    this.props.navigation.goBack(null);
                                }
                        }}>
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
                                <View style={styles.plantTitle}>
                                    <Text style={styles.textTitle}>{item.name}</Text>
                                </View>
                                <FastImage
                                    style={[styles.plantPicture, styles.padd]}
                                    source={require('../imgs/plantPicture.jpg')}
                                />  
                                <View style={[styles.plantDescr, styles.padd]}>
                                    <Text style={styles.textSubTitle}>Description:</Text>
                                    <Text style={styles.textSection}>{JSON.stringify(item)}</Text>
                                </View>
                                <View style={[styles.plantField, styles.padd]}>
                                    <Text style={styles.textSubTitle}>Field1:</Text>
                                    <Text style={styles.textSection}>{JSON.stringify(item)}</Text>
                                </View>
                                <View style={[styles.plantField, styles.padd]}>
                                    <Text style={styles.textSubTitle}>Field2:</Text>
                                    <Text style={styles.textSection}>{JSON.stringify(item)}</Text>
                                </View>
                                <View style={[styles.plantField, styles.padd]}>
                                    <Text style={styles.textSubTitle}>Field3:</Text>
                                    <Text style={styles.textSection}>{JSON.stringify(item)}</Text>
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
});
