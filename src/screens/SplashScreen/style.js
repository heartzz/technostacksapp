const React = require("react-native");
const { Platform, Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  viewStyles: {
    flex: 1,
  },
  textStyles: {
    marginTop:20,
    color: '#C6F3F0',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor:'transparent'
  },


};
