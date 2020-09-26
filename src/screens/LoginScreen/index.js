import React, { Component } from 'react';
import { Alert,TextInput, View, StyleSheet,TouchableOpacity,NetInfo,AsyncStorage,ActivityIndicator,BackHandler,Image,CheckBox} from 'react-native';
import { Container, Header, Content, Button, Text,Toast,Card,CardItem,Icon} from 'native-base';
import {fetchThemeColrs,saveThemeColrs} from '../../storage/StoreAppcolor.js';
import api from '../../config/api';
import styles from "./style";
import DeviceInfo from 'react-native-device-info';




export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginurl: "",
      loginemail:"",
      password: "",
    };
    fetchThemeColrs();
  }


  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
       BackHandler.exitApp()
       return true
     }.bind(this))
  }



  CheckTextInputIsEmptyOrNot = () =>{
    const { loginurl, loginemail, password } = this.state;

    let multipleuserlogininfo = {
      app_version:"1.0",
      device_model:"SM-N750",
      device_name:DeviceInfo.getBrand(),
      device_token:"asdasdasd",
      device_type:"android",
      device_uid:"5fd489c904abbaee",
      device_version:"5.1.1"
    };


    let logindata = {
        url: this.state.loginurl+".fiiviq.com",
        username: this.state.loginemail,
        password: this.state.password,
        "multiple_user_login":multipleuserlogininfo,
    };




      if(!loginurl == ''){
        if(!loginemail == ''){
          if(!password == ''){
            if(password.length >= 8){
                this.setState({loading: true});
                this.onLogin(logindata);
              }else{Toast.show({text:'Please Enter Eight Character Password ',duration:2000});}
            }else{Toast.show({text:'Please Enter Password ',duration:2000});}
          }else{Toast.show({text:'Please Enter Email ',duration:2000});}
        }else{Toast.show({text:'Please Enter Url ',duration:2000});}


   }

   onLogin(loginRequestdata){
      api.LoginAuth.login(loginRequestdata)
        .then((response) => {
          var resStatus = response.status;
          console.log("response Status...",resStatus);
          response.json()
          .then( (jsondata) => {
              if(resStatus== 200){
                this.setState({loading: false});
                AsyncStorage.setItem("users",jsondata.data.Users);

                console.log("Profile data before...1",jsondata.data);
                console.log("Profile data before...",jsondata.data.Users);

                this.props.navigation.navigate("ProfileScreen",{ProfileData:jsondata.data});

              }else if(resStatus == 401){
                console.log(resStatus);
              //  Toast.show('Username or Password is invalid please try again!!', Toast.LONG);
                Toast.show({text:'Username or Password is invalid please try again!!',duration:2000});
              }
              else{
                console.log("Something went wrong please try again!!");
                this.setState({loading: false});
                Toast.show({text:'Something went wrong please try again!!',duration:2000});
             }
            })
        }).catch((error) => {console.log(String(error).replace('Error: ',''));
        }).done(() => {this.setState({loading: false});});
   }



  render() {

    return (
      <View style={styles.container}>
       <View style = {{flexDirection:'column',flex:1}}>
       <View style = {styles.imgcontainer}>
                      <Image source={require('../../images/ic_app_icon.png')} style={styles.image} />
                  </View>
         <View style = {{flex:0.8,backgroundColor:fetchThemeColrs().colour.WHITE,justifyContent:'center',alignItems:'center'}}>

         <Card style = {{width:350,height: 55,backgroundColor:fetchThemeColrs().colour.WHITE,borderWidth: 0,borderRadius: 50,elevation:5}}>
          <View style={styles.iconSection}>

                     <TextInput
                       onChangeText={(loginurl) => this.setState({ loginurl })}
                       placeholder={'Login Url'}
                       style={styles.urlinput}/>

                       <Text style={{fontSize:14,marginTop:15,paddingRight:5,dcolor:fetchThemeColrs().colour.LightGrey}}>.fiiviq.com</Text>

                       <Image source={require('../../images/ic_workshp_url.png')} style={styles.iconimage} />

                       </View>

              </Card>

        <Card style = {{width:350,height: 55,backgroundColor:fetchThemeColrs().colour.WHITE,borderWidth: 0,borderRadius: 50,elevation:5}}>
        <View style={styles.iconSection}>
                          <TextInput
                            onChangeText={(loginemail) => this.setState({ loginemail })}
                            placeholder={'Username'}
                            style={styles.input}/>



                            <Image source={require('../../images/ic_user.png')} style={styles.iconimage} />

                            </View>
          </Card>

        <Card style = {{width:350,height: 55,backgroundColor:fetchThemeColrs().colour.WHITE,borderWidth: 0,borderRadius: 50,elevation:5}}>

        <View style={styles.iconSection}>
                     <TextInput
                       onChangeText={(password) => this.setState({ password })}
                       placeholder={'Password'}
                       secureTextEntry={true}
                       style={styles.input}/>

                        <Image source={require('../../images/ic_password.png')} style={styles.iconimage} />

                       </View>

              </Card>

              <View style={{flexDirection: 'row',marginTop:15}}>
                  <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center',flex:1}}>
                    <CheckBox
                              value={false}

                              style={styles.checkbox}
                            />

                            <Text style={{fontSize:14,color:fetchThemeColrs().colour.DarkGrey}}>Remember Me</Text>

              </View>
              <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center',flex:1}}>


                        <Text style={{fontSize:14,color:fetchThemeColrs().colour.DarkGrey}}>Forgot Password?</Text>

                        </View>
              </View>

              <View style={{flexDirection: 'row',marginTop:15}}>
                  <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center',flex:1}}>
                    <CheckBox
                              value={false}

                              style={styles.checkbox}
                            />

                            <Text style={{fontSize:14,color:fetchThemeColrs().colour.DarkGrey}}>I accept the Terms & Condition</Text>

              </View>

              </View>




                       {this.state.loading
                           ?
                           <ActivityIndicator
                           animating
                           color = {fetchThemeColrs().colour.STBAR_BACKGROUNG}
                           size = "large"/>
                           :

                           <Card style = {{width:350,height: 55,backgroundColor:fetchThemeColrs().colour.WHITE,borderWidth: 0,borderRadius: 50,elevation:5}}>
                           <Button style = {styles.loginbtn} onPress = {()=>{this.CheckTextInputIsEmptyOrNot()}}><Text uppercase={false} style = {{fontSize:18,color:'white'}}> Login </Text></Button>
                             </Card>


                      }
                      <View style={{flexDirection: 'row',marginTop:15}}>
                            <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                              <Text style={{fontSize:15,color:fetchThemeColrs().colour.loginbuttonbg}}>Privacy Policy</Text>

                            </View>
                            <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:15,color:fetchThemeColrs().colour.LightGrey}}>       AND   </Text>

                              </View>
                              <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>

                                  <Text style={{fontSize:15,color:fetchThemeColrs().colour.loginbuttonbg}}>Terms & Condition</Text>

                                </View>
                      </View>

                      <Text style={{fontSize:15,marginTop:15,color:fetchThemeColrs().colour.LightGrey}}>  Version 1.6   </Text>
           </View>
       </View>
      </View>
    );
  }
}
