const React = require('react-native');
const { Dimensions } = React;
const Height = Dimensions.get('window').height;


export default {
  Center: {
    justifyContent: "center",
    alignItems: "center"
  },
  MainView: {
    backgroundColor: "rgb(246,246,246)",
    paddingHorizontal: 20
  },
  arrowIcon: {
    height: 60,
    justifyContent: "center"
  },
  AddNewTask: {
    flex: 1,
    justifyContent: "center"
  },
  InputView: {
    flex: 1.5,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  TextView: {
    flex: 1.5,
    borderBottomColor: '#fc6770',
    borderBottomWidth: 1,
    paddingTop: 40
  },
  When: {
    flex: 1,
    justifyContent: "flex-end"
  },
  ButtonMainView: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center"
  },
  TodayView: {
    flex: 1,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "rgb(255,255,255)",
    elevation: 3
  },
  Today: {
    alignItems: "center",
    padding: 7,
    borderRadius: 5
  },
  TodayView2: {
    flex: 1,
    borderRadius: 5,
    marginRight: 10,
    padding: 7,
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)",
    elevation: 3
  },
  TodayText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto-Regular'
  },
  TommorowView: {
    flex: 1,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "rgb(255,255,255)",
    elevation: 3
  },
  Tommorow: {
    alignItems: "center",
    padding: 7,
    borderRadius: 5
  },
  TommorowView2: {
    flex: 1,
    borderRadius: 5,
    marginRight: 10,
    padding: 7,
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)",
    elevation: 3
  },
  OtherDayView: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "rgb(255,255,255)",
    elevation: 3
  },
  OtherDayView2: {
    flex: 1,
    borderRadius: 5,
    padding: 7,
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)",
    elevation: 3
  },
  Text: {
    fontSize: 11,
    color: '#000'
  },
  CalanderView: {
    backgroundColor: 'rgb(250,106,107)',
    borderRadius: 2
  },
  addButton: {
    flex: 1.5,
    justifyContent: "flex-end"
  },
  addButtonView: {
    height: Height / 11,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  AddNewText: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Roboto-Regular'
  }
}
