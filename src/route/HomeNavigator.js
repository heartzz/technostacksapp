import React from "react";
import { createStackNavigator, createAppContainer,createDrawerNavigator } from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';

export const SignedOut = createStackNavigator({
    LoginScreen: {screen: LoginScreen},

  },
  {
    initialRouteName: "LoginScreen",
    headerMode: "none"
  }
);



export const SignedIn = createStackNavigator(
  {
    ProfileScreen : {screen : ProfileScreen}

  },
  {
    initialRouteName: 'ProfileScreen',
    headerMode: "none"
  }
);

export const RootStack = createStackNavigator(
  {
    SplashScreen:{ screen: SplashScreen},
    SignedIn: {screen: SignedIn},
    SignedOut: {screen: SignedOut},
  },
  {
    headerMode: "none",
  }
);

export const AppContainer = () => {
  return createAppContainer(RootStack);
}
