import React, { Component } from 'react';
import { Alert,TextInput, View, StyleSheet,TouchableOpacity,NetInfo,AsyncStorage,ActivityIndicator,BackHandler} from 'react-native';
import { Container, Header, Content, Button, Text,Toast,Tab, Tabs} from 'native-base';
import {fetchThemeColrs,saveThemeColrs} from '../../storage/StoreAppcolor.js';
import api from '../../config/api';
import styles from "./style";






export default class signuptab extends React.Component {
  constructor(props) {
    super(props);

  }


  





  render() {
    return (
      <View style={styles.container}>


      </View>
    );
  }
}
