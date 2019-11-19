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
    
    displayRow(item, index) {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                this.props.navigation.navigate('WikiIndoorFlower',
                    {
                        id: item,
                        otherParam: 'Ornamentali',
                    }
                )
            }}
            >
                <View style={styles.row}>
                    <Image
                        style={styles.plantImage}
                        source={plantImg(item.id_plant)}
                    />
                    <View style={styles.col}> 
                        <Text style={styles.plantName}>{item.name}</Text>
                        <View style={styles.stars}>
                            <Image
                                style={styles.starImage}
                                source={require('../imgs/star.png')}
                            />
                            <Image
                                style={styles.starImage}
                                source={require('../imgs/star.png')}
                            />
                            <Image
                                style={styles.starImage}
                                source={require('../imgs/star.png')}
                            />
                            <Image
                                style={styles.starImage}
                                source={require('../imgs/starEmpty.png')}
                            />
                            <Image
                                style={styles.starImage}
                                source={require('../imgs/starEmpty.png')}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    
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
                <View style={styles.container}>
                    <View style={styles.containerBody}>
                        <ScrollView style={styles.scrollview} bounces={false}>
                        <Image
                            style={styles.bkImage}
                            source={require('../imgs/grassBack1.jpg')}
                        />  
                            <View style={styles.body}>
                                <View style={styles.containerText}>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non massa vitae nunc luctus interdum. Sed rutrum sit amet tortor ut congue. Vestibulum vitae porta diam. Aliquam facilisis sem a justo aliquam euismod. Curabitur facilisis elit eget odio tristique auctor. Quisque cursus enim magna. Aliquam viverra placerat erat, quis sollicitudin risus sodales ac. Nam fermentum ex ut suscipit gravida. Praesent nec eros hendrerit mi commodo accumsan ut eu velit. Nunc vehicula faucibus diam, nec molestie nunc placerat ut. In sagittis diam vel orci convallis fermentum.</Text>
                                </View>
                                <FlatList 
                                    numColumns={1}
                                    data={this.state.dataSource}
                                    scrollEnabled={false}
                                    keyExtractor = {(item, index) => index.toString()}
                                    renderItem = {({item, index}) => 
                                        <View style={styles.plantBox}>
                                            {this.displayRow(item, index)}                                            
                                        </View>
                                    } 
                                />
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
