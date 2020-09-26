import React, { Component } from 'react';
import { Alert,TextInput, View, StyleSheet,TouchableOpacity,NetInfo,AsyncStorage,ActivityIndicator,BackHandler,StatusBar,Image} from 'react-native';
import { Container, Header, Content, Button, Text,Toast,Icon,Card,CardItem} from 'native-base';
import {fetchThemeColrs,saveThemeColrs} from '../../storage/StoreAppcolor.js';
import api from '../../config/api';
import styles from "./style";



export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GetProfile:{},
    };
    fetchThemeColrs();
  }


  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
       BackHandler.exitApp()
       return true
     }.bind(this))
  }






  render() {



    return (
      <View style = {{flex:1,backgroundColor:fetchThemeColrs().colour.WHITE}}>
          <Header  style = {{backgroundColor:fetchThemeColrs().colour.BLACK}}>
            <Button transparent onPress={() =>  {this.props.navigation.goBack()}}>
              <Image source={require('../../images/backarrow.png')} style={styles.iconimage} />
            </Button>
            <Text style = {{textAlign:'center',flex:1,fontSize:22,marginTop:10,color:fetchThemeColrs().colour.WHITECOLOR}}>My Profile</Text>
          </Header>
          <StatusBar barStyle={fetchThemeColrs().colour.BARSTYLE} backgroundColor={fetchThemeColrs().colour.STBAR_BACKGROUNG}/>
          <View style = {{flexDirection:'column',flex:1}}>
                        <Card style = {{backgroundColor:fetchThemeColrs().colour.WHITECOLOR,borderWidth: 0,marginLeft:10,marginRight:10,marginTop:10,elevation:2}}>
                        <CardItem>

                        <View style={{flexDirection: 'row',flex:1}}>
                            <View style ={{flexDirection:'column',
                            borderRightWidth: 0,
                            paddingRight:15,
                            borderRightColor: fetchThemeColrs().colour.BLACK,
                            }}>


                              <Image source={require('../../images/ic_app_icon.png')}style={{width: 110, height: 110, borderRadius: 110/2,borderColor:fetchThemeColrs().colour.DarkGrey,borderWidth:1}} />


                            </View>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20,color:fetchThemeColrs().colour.DarkGrey,fontWeight: 'bold'}}>{this.props.navigation.state.params.ProfileData.Users.firstname + " " + this.props.navigation.state.params.ProfileData.Users.lastname}</Text>
                            </View>
                            </View>
                        </CardItem>
                        </Card>
                        <Card style = {{backgroundColor:fetchThemeColrs().colour.WHITECOLOR,borderWidth: 0,marginLeft:10,marginRight:10,marginTop:10,elevation:2}}>

                          <View style = {{flexDirection:'column',marginLeft:20,marginTop:30}}>
                            <Text style={{fontSize:20,color:fetchThemeColrs().colour.DarkGrey,fontWeight: 'bold'}}>Address</Text>


                            <Text style={{fontSize:18,marginTop:20,color:fetchThemeColrs().colour.ChannelGrey}}>{this.props.navigation.state.params.ProfileData.Users.street_address}</Text>
                          </View>

                          <View style = {{flexDirection:'column',marginLeft:20,marginTop:30}}>
                            <Text style={{fontSize:20,color:fetchThemeColrs().colour.DarkGrey,fontWeight: 'bold'}}>Contact</Text>


                            <Text style={{fontSize:18,marginTop:20,color:fetchThemeColrs().colour.ChannelGrey}}>{this.props.navigation.state.params.ProfileData.Users.phone_number}</Text>
                          </View>
                        <CardItem>
                        </CardItem>
              </Card>
          </View>
       </View>
    );
  }
}
