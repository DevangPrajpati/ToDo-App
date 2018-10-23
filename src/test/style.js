const React = require('react-native');
const { Dimensions } = React;
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;



export default {
  Center: {
    justifyContent: "center",
    alignItems: "center"
  },
  RoundView1: {
    height: Height / 1.8,
    width: Width / 1.02,
    borderRadius: (Width / 1.02) / 2,
    backgroundColor: "red",
    right: Width / 6,
    bottom: Height / 5
  },
  RoundView2: {
    height: Height / 5.5,
    width: Width / 3,
    borderRadius: (Width / 3) / 2,
    top: Height / 18,
    left: Width / 15,
    backgroundColor: "green",
    position: "absolute"
  },
  RoundView3: {
    height: Height / 9,
    width: Width / 5,
    borderRadius: (Width / 5) / 2,
    top: Height / 6,
    left: Width / 2.1,
    backgroundColor: "pink",
    position: "absolute"
  },
  UsernameText: {
    position: "absolute",
    fontSize: 30,
    color: "#fff",
    top: Height / 10,
    left: Width / 7,
  },
  taskText1: {
    position: "absolute",
    fontSize: 18,
    color: "#fff",
    top: Height / 6,
    left: Width / 7,
  },
  taskText2: {
    position: "absolute",
    fontSize: 18,
    color: "#fff",
    top: Height / 5,
    left: Width / 7,
  },
  ScrollView: {
    height: 60,
    width: Width,
    position: "absolute",
    top: Height / 2.7
  },
  fontSize20: {
    fontSize: 20
  },
  BottomView: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 10
  },
  PlusImage: {
    height: 70,
    width: 70
  },
  TextmainView: {
    flex: 1,
    marginHorizontal: 30
  },
  menuView: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  calanderView: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  }



}