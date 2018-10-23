const React = require('react-native');
const { Dimensions, Platform } = React;
import { Constants } from 'expo';
import Color from './colors';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;



export default {
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: "gray",
    height: Constants.statusBarHeight,
  },


}