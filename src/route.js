import React from "react";
import { createStackNavigator } from "react-navigation";

// import SignUp from "./screens/SignUp/"
import Login from "./Login/";
import SendOTP from "./SendOTP/";
import MobileVerified from "./MobileVerified/";
// import Home from "./Home/";
import AddTask from "./AddTask/";
import NewTaskAdded from "./NewTaskAdded";
import TaskMenu from "./TaskMenu";
// import Test from "./test";


const routeConfiguration = {
 Login : {screen : Login},
 SendOTP : {screen : SendOTP},
//  Home : {screen : Home},
 MobileVerified : {screen : MobileVerified},
 AddTask : {screen : AddTask},
 NewTaskAdded : {screen : NewTaskAdded},
 TaskMenu : {screen : TaskMenu},
//  Test : {screen : Test},
}

const stackNavigatorConfiguration = {
 headerMode: "none",
 gesusersEnabled: false,
 initialRouteName : "Login",
}
export const AppScreen = createStackNavigator(routeConfiguration, stackNavigatorConfiguration)