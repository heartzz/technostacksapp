import React, { Component } from 'react';
import { Alert,TextInput, View, StyleSheet,TouchableOpacity,NetInfo,AsyncStorage,ActivityIndicator,BackHandler} from 'react-native';
import { Container, Header, Content, Button, Text,Toast,Tab, Tabs} from 'native-base';
import {fetchThemeColrs,saveThemeColrs} from '../../storage/StoreAppcolor.js';
import api from '../../config/api';
import styles from "./style";






export default class logintab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginurl: "",
      loginemail:"",
      password: "",
    };
    fetchThemeColrs();
  }


  



  CheckTextInputIsEmptyOrNot = () =>{
    const { loginurl, loginemail, password } = this.state;

    let logindata = {
        url: this.state.loginurl,
        username: this.state.loginemail,
        password: this.state.password,
    };

    let multipleuserlogininfo = {
      app_version:"1.0",
      device_model:"SM-N750",
      device_name:"samsung",
      device_token:"asdasdasd",
      device_type:"android",
      device_uid:"5fd489c904abbaee",
      device_version:"5.1.1"
    };

    let loginRequestdata = {
      logindata:logindata,
      "multiple_user_login":multipleuserlogininfo
    }

      if(!loginurl == ''){
        if(!loginemail == ''){
          if(!password == ''){
            if(password.length >= 8){
                this.setState({loading: true});
                this.onLogin(loginRequestdata);
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
                AsyncStorage.setItem("username",this.state.userName);

                this.props.navigation.navigate("ProfileScreen");

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

             <View style = {{flex:0.6,backgroundColor:'#e6e6e6',justifyContent:'center',alignItems:'center'}}>

             <TextInput
               onChangeText={(userName) => this.setState({ userName })}
               placeholder={'Username'}
               style={styles.input}/>

             <TextInput
               onChangeText={(password) => this.setState({ password })}
               placeholder={'Password'}
               secureTextEntry={true}
               style={styles.input}/>

               {this.state.loading
                   ?
                   <ActivityIndicator
                   animating
                   color = {fetchThemeColrs().colour.STBAR_BACKGROUNG}
                   size = "large"/>
                   :

               <Button style = {{backgroundColor:fetchThemeColrs().colour.STBAR_BACKGROUNG}} onPress = {()=>{this.CheckTextInputIsEmptyOrNot()}}><Text> SignIn </Text></Button>
              }
               <TouchableOpacity onPress={(event) => {this.props.navigation.navigate('ForgotPasswordScreen')}}>
                <Text style = {{fontSize:14,fontWeight:'bold', position: 'relative',bottom:0,marginTop:10}}>forget password</Text>
               </TouchableOpacity>
               </View>
         </View>
      </View>
    );
  }
}
