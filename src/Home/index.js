import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, ListView } from 'react-native';
import { LinearGradient } from 'expo';
import style from './style';
import CommonStyle from './../appConfig/commonStyles';
import images from "./../images";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class Home extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['Buy Computer science book from Agarwal Book store', 'Send updated logo and source files', 'Recharge broadband bill'])
    };
  }

  render() {
    console.log("dataSource-->", this.state.dataSource);

    return (
      <View style={[CommonStyle.container]}>
        <View style={CommonStyle.statusBar} />
        <View style={[CommonStyle.container, { backgroundColor: "#fff" }]}>
          <View style={CommonStyle.container}>
            <LinearGradient
              start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
              colors={['rgb(251, 141, 99)', 'rgb(250, 85, 113)']}
              style={style.RoundView1}>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
              colors={['rgb(251, 141, 99)', 'rgb(250, 85, 113)']}
              style={style.RoundView2}>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
              colors={['rgb(251, 141, 99)', 'rgb(250, 85, 113)']}
              style={style.RoundView3}>
            </LinearGradient>
            <Text style={style.UsernameText}>Himanshu</Text>
            <Text style={style.taskText1}>You have 2 remaining</Text>
            <Text style={style.taskText2}>tasks for today!</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={style.ScrollView} >
              <Text style={{ fontSize: 35 }}> 4 july  5 July   Today    Tommorrow   </Text>
            </ScrollView>
          </View>
          <View style={style.TextmainView}>
            <View style={CommonStyle.container}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={style.fontSize20}>{rowData}</Text>}
              />
            </View>
            <View style={style.BottomView}>
              <TouchableOpacity style={style.menuView}>
                <Image source={images.menu} />
              </TouchableOpacity>

              <TouchableOpacity style={[CommonStyle.container, style.Center]} onPress={() => this.props.navigation.navigate('AddTask')}>
                <Image source={images.plus} style={style.PlusImage} />
              </TouchableOpacity>

              <TouchableOpacity style={style.calanderView}>
                <Image source={images.calander} />
              </TouchableOpacity>

            </View>
          </View>
        </View>

      </View>

    );
  }
}
export default Home;
