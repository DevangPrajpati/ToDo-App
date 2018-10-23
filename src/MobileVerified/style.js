const React = require('react-native');
const { Dimensions } = React;
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;



export default {
  BgImage: {
    height: Height,
    width: Width
  },
  Center: {
    justifyContent: "center",
    alignItems: "center"
  },
  AwesomeText: {
    fontSize: 22,
    color: "{['rgb(252, 142, 82)','rgb(249, 101, 142)']}",
    fontFamily: 'Roboto-Regular',
  },
  image: {
    height: 100,
    width: 72
  },
  MainView: {
    flex: 1,
    justifyContent: "center"
  },
  subView: {
    height: 360,
    width: Width
  },
  ImageView: {
    height: 150,
    width: Width
  },
  TextView: {
    height: 50,
    width: Width
  },
  Text: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: 'Roboto-Regular',
  },
  buttonView: {
    height: 110,
    width: Width
  },
  buttonsubview: {
    height: 55,
    width: Width / 1.28,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: 'Roboto-Regular',
  },
  Font: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular'
  },

}