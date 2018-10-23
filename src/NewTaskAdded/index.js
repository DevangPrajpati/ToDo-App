import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { LinearGradient } from 'expo';
import style from './style';
import CommonStyle from './../appConfig/commonStyles';


class NewTaskAdded extends Component {

  render() {

    return (
      <View style={[CommonStyle.container]}>
        <View style={CommonStyle.statusBar} />
        <View style={[CommonStyle.container]}>
          <View style={[style.Center, { flex: 4}]}>
            <Entypo name="check" size={100} color="rgb(250,97,110)" />
            <Text style={style.NewTask}>New Task Added!</Text>
          </View>
          <View style={[style.Center, { flex: 2}]}>
            <Text style={style.dateText}>For july 07</Text>
            <Text style={style.fontSize22}>Review Updated design and</Text>
            <Text style={style.fontSize22}>share feedback</Text>
          </View>
          <View style={style.mainView}>
            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['rgb(251, 138, 86)', 'rgb(249, 67, 104)']}
                style={[style.Center, style.buttonsubview, { flexDirection: "row" }]} >
                <MaterialCommunityIcons name="plus" size={30} color="#fff" />
                <Text style={style.buttonText}>Add Another Task</Text>
              </LinearGradient>
            </TouchableOpacity>
           
          </View>
          <TouchableOpacity style={[style.Center, {flex:2}]} 
          onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={style.fontSize25}>Back to Home</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
  }
}
export default NewTaskAdded;