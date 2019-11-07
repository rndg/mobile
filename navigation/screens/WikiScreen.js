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
        console.log(id);
        if (id == 'null' || id == undefined){
            return (
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Welcome to WikiScreen</Text>
                </View>
            )
        } else {
            from = JSON.stringify(this.props.navigation.getParam('otherParam', 'Somewhere'));
            return (
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Plant: {id}</Text>
                    <Text>Came from: {from}</Text>
                </View>
            )
        }
    }

    render () {

        return (
            <View style={styles.container}>
                <Header>
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
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>WikiScreen</Text>
                    {this.displayRoute()}
                    <Button title="Indoor Stack" onPress={()=> 
                        this.props.navigation.navigate('WikiIndoor')
                        } />
                    <Button title="Outdoor Stack" onPress={()=> 
                        this.props.navigation.navigate('WikiOutdoor')} /> 
                </View>
            </View>
        );
    }
}
export default WikiScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});