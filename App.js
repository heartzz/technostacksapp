import React, {Fragment,Component} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Button,TextInput,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import { Header } from 'native-base';
import {fetchThemeColrs,saveThemeColrs} from './src/storage/StoreAppcolor.js';
import { AppContainer } from './src/route/HomeNavigator';
import { Root } from "native-base";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTheme:"Dark"
    };
  }
  componentDidMount() {
     AsyncStorage.getItem("THEM_COLOR").then((themeName) => {
       this.state.initialTheme = themeName;
       saveThemeColrs(this.state.initialTheme);
       fetchThemeColrs();
     });
  }

  componentWillMount(){
     saveThemeColrs(this.state.initialTheme);
     fetchThemeColrs();
  }

  render() {
    const Layout = AppContainer();
    return (
      <Root>
        <Layout/>
        </Root>
     );
  }
};
