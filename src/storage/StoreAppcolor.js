import React, { Component } from 'react';
import { ScrollView ,View,StyleSheet,Modal,Image,TouchableOpacity,AsyncStorage,FlatList,ActivityIndicator,Alert,BackHandler} from 'react-native';
const STORAGE_KEY = 'THEM_COLOR';
import AppDarkColor from '../constants/AppColors.js';

var current;
var theme;

export const fetchThemeColrs = () => {
  if(theme == "Dark") {
    current = AppDarkColor;
  }
 return current;
}

export const saveThemeColrs  = (themeColor) => {
  theme = themeColor;
}
