import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    Left,
    Icon
} from 'native-base';



class WikiScreen extends Component {

    clearParams = () => {
        this.props.navigation.setParams({id: null, from: null});
    }

	displayRoute() {
        id = JSON.stringify(this.props.navigation.getParam('id'));
        if (id == 'null' || id == undefined){
            return (
                <View style={styles.container}>
                    <Text>Welcome to WikiScreen</Text>
                </View>
            )
        } else {
            from = JSON.stringify(this.props.navigation.getParam('otherParam', 'Somewhere'));
            return (
                <View style={styles.container}>
                    <Text>Plant: {id}</Text>
                    <Text>Came from: {from}</Text>
                </View>
            )
        }
    }

    render () {

        return (
            <View style={styles.containerMain}>
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
                <View style={styles.container}>
                    <Text>WikiScreen</Text>
                    {this.displayRoute()}
                    <View style={styles.container}>
                        <Button title="Indoor Stack" onPress={()=> 
                            this.props.navigation.navigate('WikiIndoor')
                            } />
                        <Button title="Outdoor Stack" onPress={()=> 
                            this.props.navigation.navigate('WikiOutdoor')} /> 
                    </View>
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
        backgroundColor: '#2c3e50',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#45803b',
    },
});