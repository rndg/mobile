import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
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
import { withNavigationFocus } from 'react-navigation';
import {
	getAchievementProgress
} from '../functions/dbRequest'

import ProgressBarAnimated from 'react-native-progress-bar-animated';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

class AchievScreen extends Component {    

    state = {
        load: false,
		dataSource: [],
		data: [ 
			{ id: "00", name: "Achiev 1",  descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dolor et tellus tempor pellentesque vel eget libero. ", prog: "34", tot: "100" },
			{ id: "01", name: "Achiev 2",  descr: "Proin quis iaculis turpis, at lobortis ante. Cras sit amet scelerisque elit. Sed a mauris sollicitudin, varius odio eget, efficitur neque. ", prog: "15", tot:"20"},
			{ id: "02", name: "Achiev 3",  descr: "Aenean pulvinar libero id gravida luctus. Vestibulum nec vestibulum libero. ", prog: "3", tot:"5"},
			{ id: "03", name: "Achiev 4",  descr: "Nullam at justo mauris. Quisque dapibus suscipit volutpat. Morbi ultricies arcu quis augue interdum, at mattis ex placerat.", prog: "150", tot:"150"},
			{ id: "04", name: "Achiev 5",  descr: "Etiam consectetur, lorem interdum vulputate cursus, elit tortor lobortis massa, vel iaculis justo magna eu lacus. ", prog: "1", tot:"3"},
			{ id: "05", name: "Achiev 6",  descr: "Morbi sit amet feugiat nulla. Cras dignissim fermentum mi, eu sagittis diam luctus vitae. Sed ligula massa, blandit non ante vitae, volutpat aliquam magna. ", prog: "65", tot:"120"},
			{ id: "07", name: "Achiev 7",  descr: "Suspendisse tristique dui nec lacus fringilla, et rhoncus metus placerat. Curabitur placerat pharetra erat.", prog: "6", tot: "9"},
			{ id: "08", name: "Achiev 8",  descr: "Quisque sed neque ultrices ante ullamcorper lacinia ut nec sapien. Nullam sed iaculis urna, vel consequat orci.", prog: "5", tot:"23"},
			{ id: "09", name: "Achiev 9",  descr: "Vestibulum ac viverra nibh. Quisque posuere, neque ac lobortis malesuada, eros justo sagittis sapien, eu vehicula elit justo ac dui.", prog: "67", tot:"150"},
			{ id: "10", name: "Achiev 10", descr: "Vestibulum fermentum rutrum ullamcorper. Vestibulum ut vulputate lacus. Aliquam semper hendrerit venenatis. Nam a neque mauris. Fusce consectetur tellus non blandit fermentum.", prog: "8", tot: "12"},
			{ id: "11", name: "Achiev 11", descr: "Nam dictum varius libero, a tristique nunc vestibulum non. Aliquam porta mi id turpis semper, ut pretium lorem laoreet. Nunc aliquet sem non lacus viverra, id dictum felis tempor.", prog: "88", tot:"100"},
			{ id: "12", name: "Achiev 12", descr: "Nulla tellus purus, pharetra sed lectus in, aliquam cursus tellus. Donec ultricies iaculis neque, eu porta ligula pellentesque in.", prog: "34", tot:"45"},
			{ id: "13", name: "Achiev 13", descr: "Morbi vitae neque nec sapien condimentum eleifend. Aenean nec nibh commodo, luctus dui nec, dictum turpis. Duis finibus scelerisque libero at euismod. ", prog: "20", tot:"20"},
			{ id: "14", name: "Achiev 14", descr: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", prog: "10", tot:"20"},
        ],
        id_user: 1,
        toUpdate: false,
    }

    componentDidMount () {
		getAchievementProgress(this.state.id_user)
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
	
	componentDidUpdate () {
		getAchievementProgress(this.state.id_user)
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

    displayRow(item, index) {
        return (
            <View style={styles.row}>
                <View style={styles.details}>
                    <Image
                        style={styles.AchievImage}
                    />
                    <View style={styles.col}> 
                        <Text style={styles.achievName}>Name: {item.name}</Text>
                        <Text style={styles.achievDescr}>Descrizione: {item.description}</Text>
                        <View style={styles.bar}>
                            <ProgressBarAnimated
                                width = {300}
                                height = {25}
                                value={(item.progress/item.total)*100}
                                maxValue = {100}
                                backgroundColor = "#45803b"
                                backgroundColorOnComplete="#2c3e50"
                                barAnimationDuration = {2500}
                            />
                        </View>
                    </View>
                </View>
                
            </View>
        )
    }

    renderPage() {
        return (
            <View style={styles.containerMain}>
            <Image source = {require('../imgs/grassBack1.jpg')} style = {styles.bkImage}/>
                <Header style={styles.header}>
                    <Left>
                        <TouchableOpacity onPress = {()=> {
                            this.props.navigation.goBack(null);
                            this.setState({toUpdate: !this.state.toUpdate});
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
                                        <View style={styles.achievBox}>
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

export default AchievScreen;

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
    AchievImage: {
        backgroundColor:'rgba(200, 200, 0, 1)',
        borderRadius:50,
        borderWidth: 3,
        borderColor: 'rgba(255, 0, 0, 0.3)',
        height: 30,
		width : 30,
    },
    row: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 10,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        //paddingLeft: 25,
        paddingRight: 10,
        //width : 300,
    },
    bar: {
        flex: 1,
        paddingVertical: 15,
        //paddingHorizontal: 15,
    },
    col:{
        flex: 1,
        flexDirection: 'column',
        //alignItems: 'center',
        //justifyContent: 'center',
        paddingHorizontal: 5,
    },
    achievName:{
        flex: 1,
        alignItems: 'flex-end',
        //justifyContent: 'center',
    },
    achievDescr:{
        flex: 1,
        alignItems: 'flex-end',
        //justifyContent: 'center',
    },
    stars: {
        flex: 1,
        flexDirection: 'row',
    },
    achievBox: {
        flex: 1,
        backgroundColor: 'transparent',
        //width : 300,
        paddingVertical: 30,

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
    },
    loadingIndicator:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(92, 145, 28, 1)',
    }
    
});

