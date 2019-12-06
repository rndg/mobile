import React, {Component} from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	Image,
	ImageBackground,
	FlatList,
	ScrollView,
	TouchableOpacity,
	Modal,
	TextInput,
	Picker,
	ActivityIndicator,
	Alert
} from 'react-native';

import {
	myPlants,
	uploadPlantToServer,
	selectPlants,
	deletePlant
} from '../functions/dbRequest'

import {
	plantImg,
} from '../functions/function'

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

import FastImage from 'react-native-fast-image';


export default class OrtoScreen extends Component {

	state = {
		load: false,
		isLoading: true,
		dataSource: [],
		data: [		//DA SETTARE SCHERMATA CON NO PIANTE
			{id: "1", id_plant: "3", id_user: "1", name: "Orchidea1", type: "Indoor"}
		],
		modalVisible: false,
		plant: {
			id: null,
			name: null,
		},
		newPlant: false,
		plants: [],
		plantName: '',
		id_plant: 0,
		id_user: 1,
		email: '',
		password: '',
		userData: [],
		type: 'Outdoor',
		sub_type: '',
		pickerDisplayed: true,
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	componentDidMount () {
		
		myPlants(this.state.id_user, this.state.type)
			.then(data => {
				if (data != 'No Results Found') {
					this.state.isLoading = false;
					this.state.dataSource = data;
				} else {
					//this.state.dataSource = this.state.data;
				}
			})
			.then(res => {
                this.setState({ load: true });
            });

		selectPlants(this.state.type, this.state.sub_type).then(data => {
			if (data != 'No Results Found') {
				this.state.isLoading = false;
				this.state.plants = data;
			}
		});
		
	}
	
	componentDidUpdate () {
		myPlants(this.state.id_user, this.state.type)
			.then(data => {
				if (data != 'No Results Found') {
					this.state.isLoading = false;
					this.state.dataSource = data;
				} else {
					//this.state.dataSource = this.state.data;
				}
			})
			.then(res => {
                this.setState({ load: true });
            });
	}
	
	addPlant(id_plant_new,id_user_new,plantName_new,type_new){
		if(id_plant_new == 0){
			Alert.alert(
				'Please, select a type of plant!'
			)
		} else {
			uploadPlantToServer(id_plant_new, id_user_new, plantName_new, type_new);
			this.setModalVisible(false);
			this.setState({ load: true });
		};
	}

	deletePlants(id_plant){
		deletePlant(id_plant)
			.then(data => {
				Alert.alert(
                    data
                );
			})
			.then(res => {
                this.setState({ load: true });
            });
		this.setModalVisible(false);
	}

	genEmpty () {
		while((this.state.dataSource.length % 2) != 0){
			this.state.dataSource.push({id : null, name: null});
		};
	}

	displayImg(item, index) {
        if (item.id != null) {
			if (index % 2 == 0){
				return (
					<ImageBackground source={require('../imgs/soil-up2-sx.png')} style={styles.backgroundImagePlant}>
						<View >
							<TouchableOpacity activeOpacity={0.7} onPress={() => {
												this.setState({newPlant: false})
												this.setModalVisible(true);
												this.state.plant = item;
											}}
											>
								<FastImage
									style={styles.plantImage}
									source={plantImg(item.id_plant)}
								/>
									<Text style={styles.plantName}>{item.name}</Text>
							</TouchableOpacity>
						</View>
					</ImageBackground>
				);
			} else {
				return (
					<ImageBackground source={require('../imgs/soil-up2-dx.png')} style={styles.backgroundImagePlant}>
						<View >
							<TouchableOpacity activeOpacity={0.7} onPress={() => {
												this.setState({newPlant: false})
												this.setModalVisible(true);
												this.state.plant = item;
											}}
											>
								<FastImage
									style={styles.plantImage}
									source={plantImg(item.id_plant)}
								/>
									<Text style={styles.plantName}>{item.name}</Text>
							</TouchableOpacity>
						</View>
					</ImageBackground>
				);
			}
        } else {
            return (
				<ImageBackground source={require('../imgs/soil-up2-dx.png')} style={styles.backgroundImagePlant}>
					<View >
						<FastImage
							style={styles.plantImage}
						/>
						<Text style={styles.plantName}>{item.name}</Text>
					</View>
				</ImageBackground>
			);
		}
	}

	genModal () {
		if(!this.state.newPlant){
			return (
				<ScrollView style={[styles.scrollview, styles.scrollPadd]} bounces={false} showsVerticalScrollIndicator={false} >
					<View style={styles.containerNewPlant}>
						<View style={styles.body}>
							<View style={styles.plantTitle}>
								<Text style={styles.textTitle}>{this.state.plant.id}</Text>
							</View>
							<FastImage
								style={[styles.plantPicture, styles.padd]}
								source={require('../imgs/plantPicture.jpg')}
							/>  
							<View style={[styles.plantDescr, styles.padd]}>
								<Text style={styles.textSubTitle}>Description:</Text>
								<Text style={styles.textSection}>{JSON.stringify(this.state.plant)}</Text>
							</View>
							<View style={[styles.plantField, styles.padd]}>
								<Text style={styles.textSubTitle}>Field1:</Text>
								<Text style={styles.textSection}>{JSON.stringify(this.state.plant)}</Text>
							</View>
							<View style={[styles.plantField, styles.padd]}>
								<Text style={styles.textSubTitle}>Field2:</Text>
								<Text style={styles.textSection}>{JSON.stringify(this.state.plant)}</Text>
							</View>
							<View style={[styles.plantField, styles.padd]}>
								<Text style={styles.textSubTitle}>Field3:</Text>
								<Text style={styles.textSection}>{JSON.stringify(this.state.plant)}</Text>
							</View>
						</View>
						<View style={styles.containerButtons2}>
							<View style={styles.containerButton1}>
								<AwesomeButtonRick type="anchor" stretch
									onPress={() => {
										const {navigate} = this.props.navigation;
										this.setModalVisible(!this.state.modalVisible);
										navigate('WikiHome', 
											{
												id: this.state.plant,
												otherParam: 'Outdoor',
											}
										);
									}}
								>								
									<Text>Go to Wiki!</Text>
								</AwesomeButtonRick>
							</View>
							<View style={styles.containerButton2}>
								<AwesomeButtonRick type="anchor" stretch
									onPress={() => 
										this.setModalVisible(!this.state.modalVisible)
									}>
									<Text> Cancel </Text>
								</AwesomeButtonRick>
							</View>
							<View style={styles.containerButton2}>
								<AwesomeButtonRick type="anchor" stretch 
									backgroundActive="rgba(153, 47, 40, 1)"	//quando è premuto
									backgroundColor="rgba(180, 51, 33, 1)"	//quando è normale
									backgroundDarker="rgba(112, 38, 33, 1)"	//bordino del tasto
									borderColor="rgba(112, 38, 33, 1)"		//bordo frontale bottone
									onPress={() => 
										this.deletePlants(this.state.plant.id)
									}>
									<Text> Delete Plant </Text>
								</AwesomeButtonRick>
							</View>
						</View>
					</View>
				</ScrollView>
			);
		} else {
			return (
				<View style={styles.containerNewPlant}>
					<View style={styles.container}></View>
					<View style={styles.bigContainer}>
						<View style={styles.textInContainer}> 
							<Text style={{width: 300}}>Plant's name:</Text>
							<TextInput
								placeholder="Choose a name for the plant"
								onChangeText={data => this.setState({ plantName: data })}
							/>
						</View>
						<View style={styles.pickerBox}>
							<Picker
								mode='dropdown'
								selectedValue={this.state.id_plant}
								style={[styles.fontComic, {width: 100, alignSelf: 'center'}]}
								itemStyle={[styles.fontComic, styles.pickerItems]}
								enabled={true}
								onValueChange={(itemValue, itemIndex) =>{
									this.setState({id_plant: itemValue});}
								}
							>
								<Picker.Item label={'Please select a type of plant'} value={0} />
								{ 
									this.state.plants.map((item) =>{
										return(
											<Picker.Item  label={item.name} value={item.id_plant} key={item.id_plant}/>
										);
									})
								}
							</Picker>
						</View>
						<View style={styles.containerButtons}>
							<View style={styles.containerButtons}>
								<AwesomeButtonRick type="anchor" stretch
									onPress={() => 
									this.addPlant(this.state.id_plant, this.state.id_user, this.state.plantName, this.state.type)
									}>
									<Text>Add plant</Text>
								</AwesomeButtonRick>
							</View>
							<View style={styles.containerButtons}>
								<AwesomeButtonRick type="anchor" stretch
									onPress={() => 
										this.setModalVisible(!this.state.modalVisible)
									}>
									<Text> Cancel </Text>
								</AwesomeButtonRick>
							</View>
						</View>
					</View>					
				</View>	
			)
		}
	}

	renderPage(){
		{
			this.genEmpty();
		}
		return (
			<View style={styles.container}>
			<Image source={require('../imgs/field1.jpg')} style={styles.bkImage}/>
				<View style={styles.container}>
					<View style={styles.containerModal}>
						<Modal
							animationType="slide"
							transparent={true}
							visible={this.state.modalVisible}
						>
							<View style={styles.modalContainer}>
								<View style={styles.spaceAroundModal}></View>
								<View style={styles.mdlBody}>
									<View>
										{this.genModal()}
									</View>
								</View>
								<View style={styles.spaceAroundModal}></View>
							</View>
						</Modal>
					</View>
					<View style={styles.containerBody}>
						<ScrollView style={styles.scrollview} bounces={false}>
							<Image
								style={styles.bkImage}
								source={require('../imgs/field1.jpg')}
							/>
								<ImageBackground source={require('../imgs/soil-up2.png')} style={styles.backgroundImageNewPlant}>
									<View style={styles.containerNew}>
										<TouchableOpacity activeOpacity={0.7} onPress={() => {
											this.setState({newPlant: true});
											this.setModalVisible(!this.state.modalVisible);
											}}
										>
											<FastImage
												style={styles.plantImage}
												source={require('../imgs/soilEmpty.png')}
											/>
												<Text style={styles.plantName}>NewItem</Text>
										</TouchableOpacity>
									</View>
								</ImageBackground>
								<FlatList 
									numColumns={2}
									columnWrapperStyle={styles.row}
									data={this.state.dataSource}
									scrollEnabled={false}
									extraData={this.state}
									keyExtractor = {(item, index) => index.toString()}
									renderItem = {({item, index}) => 
										<View>
											{this.displayImg(item, index)}
										</View>
									} 
								/>
								<View style={styles.containerNew}>
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

const styles = StyleSheet.create({
	title: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
	bigContainer:{
		justifyContent: 'center',
		flex: 6,
	},
	containerNewPlant: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'center',

	},
	containerModal: {
		flex: 0,
		alignItems: "center",
		backgroundColor: 'transparent',
	},
	containerBody: {
		flex: 1,
	},
	containerNew: {
		flex: 1,
		alignItems:'center',
	},
	textInContainer:{
		flex: 0.5,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'space-around',
	},
	backgroundImage: {
		position: "absolute",
		resizeMode: "repeat",
		height: '100%',
		width: undefined,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	backgroundImagePlant: {
		flex: 1,
	},
	backgroundImageNewPlant: {
		flex: 1,
		alignSelf:'center',
		height: undefined,
		width : 300,
	},
	plantImage: {
		height: 150,
		width : 150
	},
	plantName: {
		alignSelf:'center',
		backgroundColor: '#45803b',
	},
	row: {
		backgroundColor: 'transparent',
		justifyContent: 'center',
	},
	modalContainer:{
		flex:1,
		paddingHorizontal: 5,
	},
	mdlBody: {
		flex: 6,
		borderRadius: 70,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#45803b',
		paddingHorizontal: 5,
		shadowColor: "#000",
        shadowOffset: {
			width: 0,
			height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
	},
	spaceAroundModal: {
		flex: 1,
		backgroundColor: 'rgba(255, 255, 255, 0.0)',
	},
	scrollview: {
		flex: 1,
		backgroundColor: 'transparent'
	},
	scrollPadd: {
		paddingVertical: 10,
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
	fontComic: {
		fontSize: 15,
		fontFamily: 'Hey Comic',
	},
	pickerItems:{
		backgroundColor: 'transparent',
	},
	pickerBox:{
		//flex:1,
		width: 200,
		height: 200,
		alignSelf: 'center',
		borderRadius: 210, 
		borderWidth: 1, 
		borderColor: '#bdc3c7', 
		overflow:'hidden',
		backgroundColor: '#87B56A',
	},
	containerButtons:{
		flex: 1,
		justifyContent: 'space-around',
	},
	containerButtons2:{
        flex: 3,
        alignContent: 'center',
        justifyContent: 'space-around',
		width: 300,
		height: 300,
		paddingBottom: 20,
    },
	containerButton1:{
        flex: 1,
        justifyContent: 'center',
    },
    containerButton2:{
		flex: 1,
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
	loadingIndicator:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(92, 145, 28, 1)',
    }
});