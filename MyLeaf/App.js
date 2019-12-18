import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Dimensions, 
    Image,
    YellowBox,
} from 'react-native';
import { 
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/Ionicons'

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

import HomeScreen from './screens/HomeScreen';
import SerraScreen from './screens/SerraScreen';
import OrtoScreen from './screens/OrtoScreen';
import HomeScreenOld from './screens/HomeScreenOld';

import WikiScreen from './screens/WikiScreen';
import WikiIndoorHomeScreen from './screens/WikiIndoorHomeScreen';
import WikiOutdoorHomeScreen from './screens/WikiOutdoorHomeScreen';
import OrnamentalScreen from './screens/OrnamentalScreen';
import FloweringScreen from './screens/FloweringScreen';
import HorticulturalScreen from './screens/HorticulturalScreen';
import WikiOutdoorFlowerScreen from './screens/WikiOutdoorFlowerScreen';
import WikiIndoorFlowerScreen from './screens/WikiIndoorFlowerScreen';

import LogOutScreen from './screens/LogOutScreen';
import AchievScreen from './screens/AchievScreen';
import NotifyScreen from './screens/NotifyScreen';

import {
	setCustomTextInput,
	setCustomText,
} from 'react-native-global-props';

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

// Setting default for all TextInput components.
const customTextInputProps = {
	underlineColorAndroid: 'rgba(0,0,0,0)',
	style: {
		fontSize: 15,
		fontFamily: 'Hey Comic',
	}
};

// Setting default styles for all Text components.
const customTextProps = {
	style: {
		fontSize: 15,
		fontFamily: 'Hey Comic',
		//alignSelf: 'center',
	}
};

setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

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
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      },
      tabStyle: {
        height: 100,
        borderTopWidth: 5,
        borderTopColor: 'rgba(135, 181, 106,1)',
      },
      iconStyle: {

      },
      labelStyle: {
        textAlign: 'center',
        fontFamily: 'Hey Comic',
      },
      indicatorStyle: {
        borderBottomColor: 'rgba(135, 181, 106,1)',
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
        backgroundColor: 'rgba(69, 128, 59,1)',
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

const WikiOutdoorStackNavigator = createStackNavigator(
    {
      WikiOutdoorHome: {screen: WikiOutdoorHomeScreen},
      WikiHorticultural: {screen: HorticulturalScreen},
      WikiOutdoorFlower: {screen: WikiOutdoorFlowerScreen},
    },
    {
      initialRouteName: 'WikiOutdoorHome',
      headerMode: 'none',
    }
)
const WikiIndoorStackNavigator = createStackNavigator(
  {
    WikiIndoorHome: {screen: WikiIndoorHomeScreen},
    WikiOrnamental: {screen: OrnamentalScreen},
    WikiFlowering: {screen: FloweringScreen},
    WikiIndoorFlower: {screen: WikiIndoorFlowerScreen},
  },
  {
    initialRouteName: 'WikiIndoorHome',
    headerMode: 'none',
  }
)
const WikiStackNavigator = createStackNavigator(
  {
    WikiHome: {screen: WikiScreen},
    WikiIndoor: {screen: WikiIndoorStackNavigator},
    WikiOutdoor: {screen: WikiOutdoorStackNavigator},
  },
  {
    initialRouteName: 'WikiHome',
    headerMode: 'none',
  }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: AppStackNavigator,
    Wiki: WikiStackNavigator,
    Achievements: AchievScreen,
    Notifiche: NotifyScreen,
    Logout: {
      screen: LogOutScreen,
      navigationOptions: {
        drawerLabel: (
          <Text style={{color: 'rgba(255, 0, 0, 0.8)', margin: 16}}>Logout</Text>
        )
      }
    },
  },{
    contentComponent: CustomDrawerComponent,
    drawerWidth: (width/2),
    drawerBackgroundColor: 'rgba(198, 219, 184, 0.5)',
    edgeWidth: 0,
    contentOptions:{
      activeTintColor: 'rgba(0, 0, 0, 1)',
    }
  }
)

const AuthStackNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  }
) 

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

