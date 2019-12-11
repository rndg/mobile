import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    Header,
    Left,
    Icon
} from 'native-base';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";



class WikiScreen extends Component {
    state = {
		plant: {
			id: null,
			name: null,
        },
    }

    componentDidUpdate(){
        this.route();
    }

    componentDidMount(){
        this.route();
    }

    route() {
        item = this.props.navigation.getParam('id');
        from = this.props.navigation.getParam('otherParam', 'Somewhere');
        this.state.plant = item;
        if (id == 'null' || id == undefined){   
            
        } else {
            if(from == 'Outdoor'){
                this.props.navigation.navigate('WikiOutdoorFlower',
                    {
                        id: this.state.plant,
                        otherParam: from,
                    }
                );
            } else {
                this.props.navigation.navigate('WikiIndoorFlower',
                    {
                        id: this.state.plant,
                        otherParam: from,
                    }
                );
            }
        }
    }

    clearParams = () => {
        this.props.navigation.setParams({id: null, from: null});
    }

    wikiStack() {
        return (
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non massa vitae nunc luctus interdum. Sed rutrum sit amet tortor ut congue. Vestibulum vitae porta diam. Aliquam facilisis sem a justo aliquam euismod. Curabitur facilisis elit eget odio tristique auctor. Quisque cursus enim magna. Aliquam viverra placerat erat, quis sollicitudin risus sodales ac. Nam fermentum ex ut suscipit gravida. Praesent nec eros hendrerit mi commodo accumsan ut eu velit. Nunc vehicula faucibus diam, nec molestie nunc placerat ut. In sagittis diam vel orci convallis fermentum.</Text>
                </View>
                <View style={styles.containerButtons}>
					<View style={styles.containerButton1}>
						<AwesomeButtonRick type="anchor" stretch
							onPress={() => 
                                this.props.navigation.navigate('WikiIndoor')}>
							<Text>Piante da Serra</Text>
						</AwesomeButtonRick>
					</View>
					<View style={styles.containerButton2}>
						<AwesomeButtonRick type="anchor" stretch
							onPress={() => 
								this.props.navigation.navigate('WikiOutdoor')}>
							<Text>Piante da Orto</Text>
						</AwesomeButtonRick>
					</View>
				</View>
            </View>
        );
    }

    plantInfo(id, from) {
        return(
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text>Plant: {id}</Text>
                    <Text>Came from: {from}</Text>
                </View>
            </View>
        );
    }

	displayRoute() {
        id = JSON.stringify(this.props.navigation.getParam('id'));
        from = JSON.stringify(this.props.navigation.getParam('otherParam', 'Somewhere'));

        if (id == 'null' || id == undefined){
            return (
                this.wikiStack()
            );            
        } else {
            return (
                this.wikiStack()
                //this.plantInfo(id, from)
            );
        }
    }

    render () {
        return (
            <View style={styles.containerMain}>
                <Image source = {require('../imgs/grassBack1.jpg')} style = {styles.bkImage}/>
                <Header style={styles.header}>
                    <Left>
                        <TouchableOpacity onPress = {()=> {
                            this.clearParams();
                            this.props.navigation.navigate('Home');
                            }
                            }>
                            <View style={{paddingHorizontal: 10}}>
                                <Icon name="ios-arrow-back" size={10}/>
                            </View>
                        </TouchableOpacity>
                    </Left>
                </Header>
                <View style={styles.containerBody}>
                    {this.displayRoute()}
                </View>
            </View>
        );
    }
}


export default WikiScreen;

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
        justifyContent: 'space-around',
        width: 300,
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
});