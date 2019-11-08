import React, {Component} from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	Button, 
	Image,
	ImageBackground,
	FlatList,
	ListItem,
	ScrollView,
	Alert,
	TouchableHighlight,
	TouchableOpacity,
	Modal,
	SafeAreaView,
	Dimensions,
	TextInput,
	Picker,
} from 'react-native';

import {
	myPlants,
	selectPlants,
	uploadPlantToServer,
} from '../functions/dbRequest'

import {
	plantImg,
} from '../functions/function'

export default class OrtoScreen extends Component {

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
		modalVisible: false,
		plant: {
			id: null,
			name: null,
		},
		newPlant: false,
		plants: [],
		plName: '',
		id_plant: 4,
		id_user: 1,
		email: '',
		password: '',
		userData: [],
		type: 'Outdoor'
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
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
	
	genEmpty () {
		while((this.state.dataSource.length % 2) != 0){
			this.state.dataSource.push({id : null, name: null});
		};
	}

	displayImg(item, index) {
        if (item.id != null) {
			if (index % 2 == 0){
				return (
					<ImageBackground source={require('../imgs/grassBack.png')} style={styles.backgroundImagePlant}>
						<View >
							<TouchableOpacity activeOpacity={0.7} onPress={() => {
												this.setState({newPlant: false})
												this.setModalVisible(true);
												this.state.plant = item;
											}}
											>
								<Image
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
					<ImageBackground source={require('../imgs/grassBack.png')} style={styles.backgroundImagePlant}>
						<View >
							<TouchableOpacity activeOpacity={0.7} onPress={() => {
													this.setState({newPlant: false})
													this.setModalVisible(true);
													this.state.plant = item;
												}}
												>
								<Image
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
				<ImageBackground source={require('../imgs/grassBack.png')} style={styles.backgroundImagePlant}>
						<View >
							<Image
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
				<View>
					<Text style={styles.text}>{this.state.plant.id}</Text>
					<TouchableHighlight onPress={() => {
						const {navigate} = this.props.navigation;
						this.setModalVisible(!this.state.modalVisible);
						navigate('WikiHome', 
							{
								id: this.state.plant,
								otherParam: 'Orto',
							}
						);
					}}
					>
						<Text style={styles.text}>Go to Wiki</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => {
							this.setModalVisible(!this.state.modalVisible);
						}}
					>
						<Text>Cancel</Text>
					</TouchableHighlight>
				</View>
			);
		} else {
			return (
				<View>
					<TextInput
						placeholder="Enter Name Plant"
						onChangeText={data => this.setState({ plName: data })}
						style={styles.TextInputStyle}
					/>
					<TouchableHighlight onPress={() => 
						uploadPlantToServer(this.state.id_plant, this.state.id_user, this.state.plName, this.state.type)}
					>
						<Text style={styles.text}> UPLOAD Plant TO SERVER </Text>
					</TouchableHighlight>
					<View>
						<Picker
							mode='dialog'
							selectedValue={this.state.id_plant}
							style={{height: 50, width: 100, backgroundColor:'rgba(255, 255, 255, 0.5)'}}
							itemStyle={{backgroundColor:'rgba(255, 255, 255, 0.5)'}}
							enabled={false}
							onValueChange={(itemValue, itemIndex) =>
								this.setState({id_plant: itemValue})
							}
						>
						{ 
							this.state.plants.map((item) =>{
								return(
									<Picker.Item  label={item.name} value={item.id} key={item.name}/>
								);
							})
						}
						</Picker>
					</View>
					<TouchableHighlight
						onPress={() => {
							this.setModalVisible(!this.state.modalVisible);
						}}
					>
						<Text>Cancel</Text>
					</TouchableHighlight>
				</View>
			)
		}
	}

	render(){
		{this.genEmpty()}
		return (
			<View style={styles.container}>
			<Image source={require('../imgs/grassPatt.jpg')} style={styles.backgroundImage}/>
				<View style={styles.container}>
					<View style={styles.containerModal}>
						<Modal
							animationType="slide"
							transparent={true}
							visible={this.state.modalVisible}
						>
							<View style={styles.spaceAroundModal}></View>
							<View style={styles.mdlBody}>
								<View>
									{this.genModal()}
								</View>
							</View>
							<View style={styles.spaceAroundModal}></View>
						</Modal>
					</View>
					<View style={styles.containerBody}>
						<ScrollView style={styles.scrollview} bounces={false}>
							<Image
								style={styles.bkImage}
								source={require('../imgs/soilPatt.jpeg')}
							/>
								<ImageBackground source={require('../imgs/grassBack.png')} style={styles.backgroundImageNewPlant}>
									<View style={styles.containerNew}>
										<TouchableOpacity activeOpacity={0.7} onPress={() => {
											this.setState({newPlant: true});
											this.setModalVisible(!this.state.modalVisible);
											}}
										>
											<Image
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
									keyExtractor = {(item, index) => index}
									renderItem = {({item, index}) => 
										<View>
											{this.displayImg(item, index)}
										</View>
									} 
								/>
						</ScrollView>
					</View>
				</View>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	title: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: 'transparent',
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
	text: {
		alignContent: 'center',
		fontSize:20,
		color: '#000',
		backgroundColor: '#87B56A',
		borderColor: '#87B56A',
		borderRadius: 80,
	},
	backgroundImage: {
		//////IMMAGINE DI SFONDO SE POCHE PIANTE







		
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
	},
	row: {
		backgroundColor: 'transparent',
		justifyContent: 'center',
	},
	mdlBody: {
		flex: 6,
		borderRadius: 80,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#45803b',
	},
	spaceAroundModal: {
		flex: 1,
		backgroundColor: 'rgba(255, 255, 255, 0.0)',
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
	}
});