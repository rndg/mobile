import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    Button,
    TouchableOpacity
} from 'react-native';
import {
    Header,
    Left,
    Icon
} from 'native-base';

// create a component
class WikiOutDoorHomeScreen extends Component {
    render() {
        return (
            <View style={styles.containerMain}>
            <Header>
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
                <Text>WikiOutDoorHomeScreen</Text>
                <Button title="WikiHorticultural" onPress={()=> 
                        this.props.navigation.navigate('WikiHorticultural')
                        } />
            </View>
        </View>
        );
    }
}
export default WikiOutDoorHomeScreen;


// define your styles
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
});