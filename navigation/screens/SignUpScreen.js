import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';

class SignUpScreen extends Component {
    render () {
        return (
          <View style = {styles.container}>
          <ImageBackground source = {require('../imgs/greenhouse.jpg')} style = {styles.backgroundImage}>
              <View style = {styles.content}>
                  <View style = {styles.inputContainer}>
                      <TextInput style = {styles.input} placeholder = 'Name'></TextInput>
                      <TextInput style = {styles.input} placeholder = 'Surname'></TextInput>
                      <TextInput style = {styles.input} placeholder = 'Date of birth'></TextInput>
                      <TextInput style = {styles.input} placeholder = 'email'></TextInput>
                      <TextInput style = {styles.input} placeholder = 'username'></TextInput>
                      <TextInput secureTextEntry = {true} style = {styles.input} placeholder = 'Password'></TextInput>
                      <TextInput secureTextEntry = {true} style = {styles.input} placeholder = 'Confirm Password'></TextInput>                      
                      <Button title="Register" onPress={this.signIn} style={styles.buttonContainer}/>
                  </View>
              </View>
          </ImageBackground>
      </View>
        );
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      width: null,
      justifyContent: 'center',
  },
  content: {
      alignItems: 'center',
  },
  inputContainer: {
      margin: 20,
      marginBottom: 0, 
      padding: 20,
      paddingBottom: 10,
      alignSelf: 'stretch',
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: 'rgba(255,255,255,0.2)'
  },
  input: {
      fontSize: 16,
      height: 40,
      padding: 10,
      marginBottom: 10,
      backgroundColor: 'rgba(255,255,255,1)'
  },
  buttonContainer: {
      margin: 20,
      padding: 20,
      alignSelf: 'stretch',
      backgroundColor: 'blue',
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor: 'rgba(255,255,255,0.6)'
  },
  buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
  },
});
