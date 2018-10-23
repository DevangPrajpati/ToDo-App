const React = require('react-native');
const { Dimensions } = React;
import Color from './../appConfig/colors.js';
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
  Digit: {
    fontSize: 20,
    color: 'rgb(68, 66, 87)',
    fontFamily: 'Roboto-Regular',
  },
  digitView: {
    flex: 1,
    margin: 5,
    backgroundColor: "rgb(248, 248, 248)"
  },
  DigitMainView: {
    flex: 4.5,
    padding: 15,
    bottom: 20
  },
  SubView: {
    flex: 1,
    flexDirection: "row",
  },
  plusView: {
    flex: 2,
    paddingHorizontal: 5,
    borderRightWidth: 0.8,
    borderRightColor: Color.lightBlue
  },
  inputMainView: {
    height: 55,
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: 0.8,
    borderColor: "rgb(225, 225, 225)"
  },
  fontsize16: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  IconView: {
    alignItems: "flex-end",
    height: 35,
    justifyContent: "center",
    marginRight: 10
  },
  fontsize22: {
    fontSize: 22,
    fontFamily: 'Roboto-Regular',
    color: Color.powerblue
  },
  image: {
    height: 100,
    width: 55
  },
  image2: {
    height: 100,
    width: 68
  },
  CloseImage: {
    height: 15,
    width: 22
  },
  OTPview: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  mobileMainView: {
    flex: 6,
    justifyContent: "center",
    paddingLeft: 15
  },
  SendOTPtext: {
    color: 'rgb(247, 105, 73)',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  MnoText: {
    fontSize: 18,
    color: "rgb(213, 213, 217)",
    fontFamily: 'Roboto-Regular',
  }

}