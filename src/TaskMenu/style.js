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
    width: Width,
    borderRadius: (Width) / 2,
    backgroundColor: "red",
    right: Width / 6,
    bottom: Height / 5
  },
  RoundView2: {
    height: Height / 5,
    width: Width / 2.8,
    borderRadius: (Width / 3) / 2,
    top: 0,
    left: Width / 15,
    backgroundColor: "green",
    position: "absolute"
  },
  RoundView3: {
    height: Height / 9,
    width: Width / 5,
    borderRadius: (Width / 5) / 2,
    top: Height / 9,
    left: Width / 1.8,
    backgroundColor: "pink",
    position: "absolute"
  },
  UsernameText: {
    position: "absolute",
    fontSize: 30,
    fontFamily: 'Roboto-Regular',
    color: "#fff",
    top: Height / 10,
    left: Width / 7,
  },
  taskText1: {
    position: "absolute",
    fontSize: 18,
    fontFamily: 'Arimo-Regular',
    color: "#fff",
    top: Height / 6,
    left: Width / 7,
  },
  taskText2: {
    position: "absolute",
    fontSize: 18,
    fontFamily: 'Arimo-Regular',
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
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },
  BottomView: {
    height: Height / 8,
    flexDirection: "row",
    marginHorizontal: 30,
  },
  PlusImage: {
    height: 70,
    width: 70
  },
  TextmainView: {
    height: Height / 2.8,
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
  },
  rowFront: {
    backgroundColor: "#fff",
    padding: 12
  },
  rowBack: {
    backgroundColor: '#ccc',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    top: 0,
    width: 75,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  DateText: {
    fontSize: 35,
    marginHorizontal: 20
  },
  delete: {
    color: 'red',
    fontSize: 16
  },
  FontSize32:{ 
    fontSize: 32, 
    color: '#fff' 
},
marginTop12:{ 
  marginTop: 12 
},
marginTop18:{
  marginTop: 18
},

}