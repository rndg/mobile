import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

export default HomeScreen = (props) => {
	const {navigate} = props.navigation;
	return (
		<ImageBackground source={require('../imgs/backScreenFull.jpg')} style={styles.backgroundImage} >
		<View style={styles.container}>
			<Text style={styles.text}>HomeScreen</Text>
			<Button
				color="#fff"
				title="Go to Orto"
				onPress={() => navigate('Orto')}
			/>
			<Button
				color="#fff"
				title="Go to Serra"
				onPress={() => navigate('Serra')}
			/>
		</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: '#eb9f34',
	},
	text: {
		fontSize:30,
		color: '#fff'
	},
	backgroundImage: {
    	flex: 1,
    	width : '100%'
    }
});