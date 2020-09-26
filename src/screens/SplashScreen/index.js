import React, {Fragment} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Button,TextInput,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import { Header } from 'native-base';
import styles from './style';
import { isSignedIn } from '../../route/auth';
import DeviceInfo from 'react-native-device-info';
import api from '../../config/api';
import {fetchThemeColrs,saveThemeColrs} from '../../storage/StoreAppcolor.js';

export default class SplaceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLoggedIn: false,
    };
    isSignedIn()
        .then(res => {
          if(res !== '')
            this.setState({ IsLoggedIn: true});
        })
        .catch(err => alert(err));
        fetchThemeColrs();
  }

  componentDidMount() {
     setTimeout(() => {
        if(this.state.IsLoggedIn){
          this.props.navigation.navigate('SignedIn');
        }else{
          this.props.navigation.navigate('SignedOut');
        }
     }, 2000)
   }



  render() {
    return (
      <View style={styles.viewStyles}>
        <StatusBar barStyle={fetchThemeColrs().colour.BARSTYLE} backgroundColor={fetchThemeColrs().colour.STBAR_BACKGROUNG}/>

          <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
           <Text style = {{color:fetchThemeColrs().colour.STBAR_BACKGROUNG,fontSize:40,fontWeight:'bold'}}>5iQ</Text>
          </View>

       </View>
    );
  }
};
