import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Dimensions, 
    Image
} from 'react-native';
import { 
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons'

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

import HomeScreenOld from './screens/HomeScreenOld';
import SerraScreen from './screens/SerraScreen';
import OrtoScreen from './screens/OrtoScreen';

import WikiScreen from './screens/WikiScreen';
import ProfileScreen from './screens/ProfileScreen';
import AchievScreen from './screens/AchievScreen';


const {width} = Dimensions.get('window')

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    Serra: {
      screen: SerraScreen,
      navigationOptions: {
        tabBarLabel: "Serra",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={25} />
        )
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-leaf" size={25} />
        )
      }
    },
    Orto: {
      screen: OrtoScreen,
      navigationOptions: {
        tabBarLabel: "Orto",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-photos" size={25} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeTintColor: '#000',
      inactiveTintColor: '#000',
      style: {
        backgroundColor: '#45803b',
      },
      tabStyle: {
        height: 100,
      },
      iconStyle: {

      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 5,
      },
    },
  }
);

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions:({navigation}) => ({
      headerStyle: {
        backgroundColor: '#45803b',
      },
      headerLeft: (
        <TouchableOpacity onPress = {()=> navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name="md-menu" size={24}/>
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'transparent', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('./assets/logo.png')} style={{height:120, width:120, borderRadius:60}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: AppStackNavigator,
    Wiki: WikiScreen,
    Profile: ProfileScreen,
    Achievements: AchievScreen
  },{
    contentComponent: CustomDrawerComponent,
    drawerWidth: (width/2),
    drawerBackgroundColor: 'rgba(198, 219, 184, 0.5)',
    edgeWidth: 0,
    contentOptions:{
      activeTintColor: 'orange',
    }
  }
)

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
}) 

const DrawStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
}) 

const SwitchNavigator =  createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
})


const App = createAppContainer(SwitchNavigator);

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

