import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { LinearGradient } from 'expo';
import style from './style';
import CommonStyle from './../appConfig/commonStyles';
import moment from 'moment';
const Width = Dimensions.get('window').width;

import CalendarPicker from 'react-native-calendar-picker';

class AddTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      openCalander: 'false',
      Today: 'true',
      Tomorrow: 'false',
      OtherDay: 'false'
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: moment(date).format('MMM DD'),
      openCalander: 'false',
    });
  }

  _handlePress() {
    this.setState({
      openCalander: 'true',
      Today: 'false',
      Tomorrow: 'false',
      OtherDay: 'true'
    });
  }
  _TodayPress() {
    this.setState({
      Today: 'true',
      Tomorrow: 'false',
      OtherDay: 'false',
      openCalander: 'false',
    });
  }
  TommorowPress() {
    this.setState({
      Today: 'false',
      Tomorrow: 'true',
      OtherDay: 'false',
      openCalander: 'false',
    });
  }
  ChangeDate() {
    this.setState({
      openCalander: 'true',
    });
  }

  render() {

    return (

      <View style={[CommonStyle.container]}>
        <View style={CommonStyle.statusBar} />
        <View style={[CommonStyle.container, style.MainView]}>
          <TouchableOpacity style={style.arrowIcon}
            onPress={() => this.props.navigation.navigate('TaskMenu')}>
            <Ionicons name="md-arrow-back" size={35} />
          </TouchableOpacity>
          <View style={style.AddNewTask}>
   
            <Text style={{ fontSize: 32, fontFamily: 'Roboto-Regular' }}>Add New Task</Text>
          </View>
          <View style={{ flex: 2.5 }}>
            {this.state.Today === 'true'
              ? <View style={style.InputView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <TextInput
                    multiline={true}
                    style={{ fontSize: 22, height: 150, fontFamily: 'Roboto-Regular' }}
                    placeholder="e.g. Recharge mobile"
                    underlineColorAndroid="transparent"
                  />
                </ScrollView>
              </View>
              : <View style={style.TextView}>
                <Text style={{ fontSize: 20, fontFamily: 'Roboto-Regular' }}>Review Updated design and share feedback</Text>
              </View>

            }
            <View style={{ flex: 2 }}>
              <View style={style.When}>
                <Text style={{ fontSize: 20, fontFamily: 'Roboto-Regular' }}>When</Text>
              </View>
              <View style={style.ButtonMainView}>
                {this.state.Today === 'true'
                  ? <TouchableOpacity style={style.TodayView}
                    onPress={() => this._TodayPress()} >
                    <LinearGradient
                      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                      colors={['rgb(251, 138, 86)', 'rgb(249, 67, 104)']}
                      style={style.Today}>
                      <Text style={style.TodayText}>Today</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  : <TouchableOpacity style={style.TodayView2}
                    onPress={() => this._TodayPress()} >
                    <Text style={{ fontSize: 16, fontFamily: 'Roboto-Regular' }}>Today</Text>
                  </TouchableOpacity>
                }
                {this.state.Tomorrow === 'true'
                  ? <TouchableOpacity style={style.TommorowView}
                    onPress={() => this.TommorowPress()}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                      colors={['rgb(251, 138, 86)', 'rgb(249, 67, 104)']}
                      style={style.Tommorow}>
                      <Text style={style.TodayText}>Tomorrow</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  : <TouchableOpacity style={style.TommorowView2}
                    onPress={() => this.TommorowPress()}>
                    <Text style={{ fontSize: 16, fontFamily: 'Roboto-Regular' }}>Tomorrow</Text>
                  </TouchableOpacity>
                }


                {this.state.OtherDay === 'true'
                  ? <TouchableOpacity style={style.OtherDayView}
                    onPress={() => this._handlePress()}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                      colors={['rgb(251, 138, 86)', 'rgb(249, 67, 104)']}
                      style={style.Today} >
                      {this.state.selectedStartDate !== null
                        ? <View style={[style.Center, { flexDirection: 'row' }]}>
                          <Text style={style.TodayText}>{this.state.selectedStartDate}</Text>
                          <TouchableOpacity onPress={() => this.ChangeDate()}  >
                            <MaterialIcons name="edit" size={18} color='#fff' style={{ marginLeft: 7 }} />
                          </TouchableOpacity>
                        </View>
                        : <Text style={style.TodayText}>Other day</Text>
                      }
                    </LinearGradient>
                  </TouchableOpacity>
                  : <TouchableOpacity style={style.OtherDayView2}
                    onPress={() => this._handlePress()}>
                    <Text style={{ fontSize: 16, fontFamily: 'Roboto-Regular' }}>Other day</Text>
                  </TouchableOpacity>
                }

              </View>
            </View>

          </View>
          {this.state.openCalander === 'true'
            ? <View style={{ flex: 3.5 }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <CalendarPicker
                  onDateChange={this.onDateChange}
                  weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                  previousTitle={'<'}
                  nextTitle={'>'}
                  height={Width / 1.05}
                  textStyle={style.Text}
                  selectedDayStyle={style.CalanderView}
                />
              </ScrollView>
            </View>
            : null
          }

          <View style={style.addButton}>

            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['rgb(251, 138, 86)', 'rgb(249, 67, 104)']}
                style={style.addButtonView}>
                <MaterialCommunityIcons name="plus" size={30} color="#fff" />
                <Text style={style.AddNewText}> Add Now </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default AddTask;
