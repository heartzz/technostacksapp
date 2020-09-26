const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

  imgcontainer: {
    alignItems:'center',


  },
  image:{
      width: 200,
      height: 200,
      resizeMode: 'contain'
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
  input: {
    width: '85%',
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: '#094d7a',
    marginBottom: 20,
  },
  iconimage:{
      width: 25,
      height: 25
  },
};
