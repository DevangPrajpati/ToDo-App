import React, { Component } from 'react';
import {View,Text} from 'react-native'
import Setup from './src/setup';
import { Font } from 'expo';
type Props = {};





export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      isFontLoaded : false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
       'Arimo-Bold': require('./assets/Font/Arimo-Bold.ttf'),
       'Arimo-Regular': require('./assets/Font/Arimo-Regular.ttf'),
       'Roboto-Bold': require('./assets/Font/Roboto-Bold.ttf'),
       'Roboto-Regular': require('./assets/Font/Roboto-Regular.ttf')
     });
     this.setState({
       isFontLoaded:true
     })
  }

  render() {
    return (
      <View style={{flex:1}}>
      {this.state.isFontLoaded ? <Setup /> : null}
      </View>
    );
  }
}