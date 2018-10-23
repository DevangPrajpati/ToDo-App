const React = require("react-native");
const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
// const deviceWidth = Dimensions.get("window").width;

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
  },
  logo: {
    height: deviceHeight / 4.8,
    width: deviceHeight / 4
  },
  signupContainer: {
    marginTop: deviceHeight / 10,
    paddingHorizontal: 40,
    paddingBottom: 10
  },
  sedOTPContainer: {
    marginTop: deviceHeight / 10,
    paddingHorizontal: 40,
    // paddingBottom: 10
  },
  icon: {
    color: "#949699",
    marginRight: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: "#949699",
  },
  btnText: {
    fontWeight:"bold",
    color: "#fff",
    fontSize: 18,
  },
  PhoneView: {
    marginTop: 20,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#2b562a",
    alignItems: "center"
  },
  PhoneInput: {
    flex: 1,
    fontSize: 17,
    color: "#949699",
    height: 45,
    alignItems: "center"
  },
  footer: {
    // alignSelf: "flex-end",
    // paddingLeft: 20,
    // paddingRight: 20,
    backgroundColor: "transparent"
  },
  signinBtn: {
    marginTop: 20,
    backgroundColor: "#6abd45"
  },
  sendOTPfooter: {
    marginVertical: 20,
    backgroundColor: "transparent"
  },
  signupHeader: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#2b562a",
    marginTop:
      Platform.OS === "android" ? deviceHeight / 10 : deviceHeight / 10 + 0
  },
  inputfield: {
    flex: 1,
    marginHorizontal: 10,
    height: 53,
    borderBottomWidth: 1,
    borderBottomColor: "#2b552a",
  },
  inputHighlight: {
    borderBottomWidth: 3,
    borderBottomColor: "green",
  },
  inputError: {
    borderBottomWidth: 3,
    borderBottomColor: "red",
  },
  indicatorview: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  formErrorIcon: {
    color: "#fff",
    marginTop: 5,
    right: 10
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "#d9534f",
    textAlign: "right",
    top: -10
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "right",
    top: -10
  },
  inputGrp: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    borderWidth: 0,
    borderColor: "transparent"
  },
  signupBtn: {
    // marginTop: 10,
    backgroundColor:"#6abd45"
  },
  otherLinkText: {
    alignSelf: "center",
    opacity: 0.8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#EFF"
  },
  otherLinksContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  marginB : {
    marginBottom : 20
  },
  hiddenField: {
    height: 0,
  },
  fieldPart: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallMargin: {
    marginTop: 5,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color:"#2b552a"
  },
  errorLabel: {
    fontSize: 12,
    color: "red",
  },
  textImput : {
    flex: 1,
    fontSize: 17,
    color: "#949699"
  },
  sendOtpText: {
    color: "#949699",
    fontSize:12,
    textAlign: "center",
  },
  footerText: {
    color: "#949699",
    alignSelf: "flex-end"
  },
  marginTop20: {
    marginTop: 20
  }
};