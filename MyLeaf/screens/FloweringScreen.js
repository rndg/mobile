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
    ActivityIndicator
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
        load: false,
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
        type: 'Indoor',
        sub_type: 'Floricola'
    }

    componentDidMount () {
		
		
        selectPlants(this.state.type, this.state.sub_type)
            .then(data => {
                    if (data != 'No Results Found') {
                        this.state.isLoading = false;
                        this.state.plants = data;
                    }
            })
            .then(res => {
                this.setState({ load: true });
            });
    }

    displayStars(stars){
        const starsComponents = [];
        for (i = 0; i < stars; i++) {
            starsComponents.push(<FastImage style={styles.starImage} source={require('../imgs/star.png')}/>);
        };
        for (i = 0; i < 5-stars; i++) {
            starsComponents.push(<FastImage style={styles.starImage} source={require('../imgs/starEmpty.png')}/>);
        };
        return starsComponents;
    }
    
    displayRow(item, index) {
        return (
            <View style={styles.containerPlant}>
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
                    height={200}
                    onPress={() => {
                            this.props.navigation.navigate('WikiIndoorFlower',
                            {
                                id: item,
                                otherParam: 'Floricole',
                            })
                        }
                    }>
                    <View style={styles.row}>
                        <FastImage
                            style={styles.plantImage}
                            source={plantImg(item.id_plant)}
                        />
                        <View style={styles.col}> 
                            <Text style={styles.plantName}>{item.name}</Text>
                            <View style={styles.stars}>
                                {this.displayStars(item.difficulty)}
                            </View>
                        </View>
                    </View>
                </AwesomeButtonRick>
            </View>
        )
    }
    
    renderPage() {
        
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
                    <View style={styles.containerBody}>
                        <ScrollView style={styles.scrollview} bounces={false} showsVerticalScrollIndicator={false}>
                        <Image
                            style={styles.bkImage}
                            source={require('../imgs/carpetBlue.jpg')}
                        />  
                            <View style={styles.body}>
                                <View style={styles.upSpace}>    
                                </View>
                                <View style={styles.containerText}>
                                    <Image
                                        style={styles.bkImage}
                                        source={require('../imgs/woodBack.jpeg')}
                                    /> 
                                    <Text style={styles.textComp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non massa vitae nunc luctus interdum. Sed rutrum sit amet tortor ut congue. Vestibulum vitae porta diam. Aliquam facilisis sem a justo aliquam euismod. Curabitur facilisis elit eget odio tristique auctor. Quisque cursus enim magna. Aliquam viverra placerat erat, quis sollicitudin risus sodales ac. Nam fermentum ex ut suscipit gravida. Praesent nec eros hendrerit mi commodo accumsan ut eu velit. Nunc vehicula faucibus diam, nec molestie nunc placerat ut. In sagittis diam vel orci convallis fermentum.</Text>
                                </View>
                                <View style={styles.upSpace}>    
                                </View>
                                <FlatList 
                                    numColumns={1}
                                    data={this.state.plants}
                                    scrollEnabled={false}
                                    keyExtractor = {(item, index) => index.toString()}
                                    renderItem = {({item, index}) => 
                                        <View style={styles.plantBox}>
                                            {this.displayRow(item, index)}                                            
                                        </View>
                                    } 
                                />
                                <View style={styles.emptyRow}>    
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const { load } = (this.state.load);
        if(!this.state.load) { return (
            <View style={styles.loadingIndicator}>
                <ActivityIndicator/>
            </View>
        )}
        return this.renderPage();
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
    emptyRow: {
        flex: 1,
        height: 150,
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
        paddingRight: 35,
    },
    plantBox: {
        flex: 1,
        backgroundColor: 'transparent',
        width : 300,
        alignSelf:'center',
        margin: 20,
    },
    containerText: {
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
        paddingHorizontal: 5,
        backgroundColor: 'rgba(149, 212, 74, 1)',
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
    containerPlant: {
        flex: 1,
        width: 300,
    },
    body:{
        //alignItems: 'center', 
        backgroundColor: 'transparent'
    },
    loadingIndicator:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(92, 145, 28, 1)',
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
