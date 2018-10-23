const React = require('react-native');
const { Dimensions } = React;
const Width = Dimensions.get('window').width;

export default {
  buttonsubview: {
    height: 60,
    width: Width / 1.28,
    borderRadius: 5
  },
  Center: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: 'Roboto-Regular'
  },
  NewTask: {
    fontSize: 30,
    color: "rgb(250,97,110)",
    fontFamily: 'Roboto-Regular'
  },
  dateText: {
    fontSize: 14,
    paddingBottom: 10,
    fontFamily: 'Roboto-Regular'
  },
  mainView: {
    flex: 4,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  fontSize22: {
    fontSize: 22,
    fontFamily: 'Roboto-Regular'
  },
  fontSize25: {
    fontSize: 25,
    fontFamily: 'Roboto-Regular'
  },
}