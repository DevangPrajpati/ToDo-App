const React = require('react-native');
const { Dimensions } = React;
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

import Color from './../appConfig/colors.js';


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
    fontSize: 22,
    color: 'rgb(68, 66, 87)',
    fontFamily: 'Roboto-Regular',
  },
  digitView: {
    flex: 1,
    backgroundColor: "rgb(248, 248, 248)",
    margin: 5,
    paddingVertical: 20
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
    paddingVertical: 8,
    borderWidth: 0.8,
    borderColor: "rgb(225, 225, 225)"
  },
  IconView: {
    alignItems: "flex-end",
    marginVertical: 10,
    marginRight: 10
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
  OTPtext: {
    fontSize: 12,
    color: 'rgb(84, 179, 90)',
    paddingLeft: 5,
    fontFamily: 'Roboto-Regular',
  },
  greenView: {
    marginTop: 8,
    height: 35,
    flexDirection: "row",
    marginHorizontal: 15,
    backgroundColor: 'rgb(246, 255, 242)',
  },
  fontBold: {
    fontFamily: 'Roboto-Regular',
    color: Color.powerblue,
    fontFamily: 'Roboto-Regular',
  },
  fontSize22: {
    fontSize: 22
  },
  fontSize16: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  fontSize20: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
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
  inputfield: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 10,
    height: 45,
    borderBottomWidth: 2,
    justifyContent: "center",
    borderBottomColor: "rgb(225, 225, 225)",
  },
    inputfield1: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 10,
    height: 45,
    borderBottomWidth: 2,
    justifyContent: "center",
    borderBottomColor: "black",
  },

  text: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: 'Roboto-Regular',
  },
  OTPBelowView: {
    flex: 1,
    justifyContent: "flex-end"
  },
  MobileView: {
    flex: 6,
    justifyContent: "center",
    paddingLeft: 15,
  },
  CheckView: {
    flex: 9,
    justifyContent: "center"
  },
  ResendText: {
    color: 'rgb(247, 105, 73)',
    fontSize: 15,
    fontFamily: 'Roboto-Regular'
  },
  fontSize18: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular'
  },
  OTPsetView: {
    flex: 2.5,
    alignItems: "center"
  },
  OTPdigitView: {
    flexDirection: "row",
    marginHorizontal: 60
  },
  paddingLeft20: {
    paddingLeft: 20
  }

}