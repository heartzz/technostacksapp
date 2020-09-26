const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

  imgcontainer: {
    alignItems:'center',
    backgroundColor:'#000000'

  },
  image:{
      width: 200,
      height: 200,
      resizeMode: 'contain'
  },

  iconimage:{
      width: 25,
      height: 25,
      marginTop:15
  },
  bottomView:{
    position: 'absolute',
    alignItems:'center',
    width:'100%',
    bottom: 15,
 },

 container: {
    flex: 1,

  },
  icon: {
    padding: 10,
},
iconSection: {
    flex: 1,
    flexDirection: 'row',

},
  input: {
    height: 55,
    padding: 10,
    borderWidth: 0,
    width:310,
    borderRadius: 50,
    marginBottom: 20,
  },

  urlinput: {
    height: 55,
    padding: 10,
    borderWidth: 0,
    width:240,
    borderRadius: 50,
    marginBottom: 20,
  },


  loginbtn: {
    height: 55,
    padding: 10,
    borderWidth: 0,
    width:350,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor:'#15ddf1',
    justifyContent:'center',alignItems:'center'
  },
  checkbox: {
    alignSelf: "center",
  },
};
