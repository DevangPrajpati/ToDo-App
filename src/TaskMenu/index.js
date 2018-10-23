import React, { Component } from 'react';
import { View, Text, Easing, Animated, ListView, Dimensions, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import style from './style';
import CommonStyle from './../appConfig/commonStyles';
import images from "./../images";
import { SwipeListView } from 'react-native-swipe-list-view';

import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const Width = Dimensions.get('window').width;

const ArrayData = [{
    value: 'Buy Computer science book from Agarwal Book store'
  },{
    value: 'Send updated logo and source files'
  },{
    value: 'Recharge broadband bill'
  },{
    value: 'Send first design draft of flower website landing page'
  },{
    value: 'Checkout website design inspiration on uplabs'
  },{
    value: 'Book online ticket for Udaipur'
  }];


class TaskMenu extends Component {

  constructor(props) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
    this.state = {
      selectedStartDate: null,
      listViewData: ArrayData.map((d, i) => d.value),

      scale: new Animated.Value(0),
      widthAnimated: new Animated.Value(0),
      heightAnimated: new Animated.Value(0),
      leftAnimated: new Animated.Value(0),
      bottomAnimated: new Animated.Value(0),

      CalanderScale: new Animated.Value(0),
      CalanderWidthAnimated: new Animated.Value(0),
      CalanderHeightAnimated: new Animated.Value(0),
      CalanderRightAnimated: new Animated.Value(0),
      CalanderBottomAnimated: new Animated.Value(0)

    };
  }

  state = {
    opacityView : false
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: moment(date).format('MMM DD')
    });
    Animated.parallel([
      Animated.timing(this.state.CalanderScale, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderWidthAnimated, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderHeightAnimated, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderRightAnimated, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderBottomAnimated, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      })
    ]).start();
  }

  componentWillMount() {
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  showBubble() {
    this.setState({ opacityView: true });
    this.state.scale.setValue(0);
    this.state.widthAnimated.setValue(0);
    this.state.heightAnimated.setValue(0);
    this.state.leftAnimated.setValue(0);
    this.state.bottomAnimated.setValue(0);
    Animated.parallel([
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      }),
      Animated.timing(this.state.widthAnimated, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      }),
      Animated.timing(this.state.heightAnimated, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      }),
      Animated.timing(this.state.leftAnimated, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      }),
      Animated.timing(this.state.bottomAnimated, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      })
    ]).start();
  }


  showCalanderBubble() {
    this.state.CalanderScale.setValue(0);
    this.state.CalanderWidthAnimated.setValue(0);
    this.state.CalanderHeightAnimated.setValue(0);
    this.state.CalanderRightAnimated.setValue(0);
    this.state.CalanderBottomAnimated.setValue(0);
    Animated.parallel([
      Animated.timing(this.state.CalanderScale, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderWidthAnimated, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderHeightAnimated, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderRightAnimated, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderBottomAnimated, {
        toValue: 1,
        duration: 1000,
        easing: Easing.circle
      })
    ]).start();
    this.setState({ opacityView: true });

    // this.setTimeout( () => {
    //   this.setState({ opacityView: true });
    //   this.setTimePassed();
    //  },5000);
  }

  hideBubble() {
    this.setState({ opacityView: false });
    Animated.parallel([
      Animated.timing(this.state.scale, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      }),
      Animated.timing(this.state.widthAnimated, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      }),
      Animated.timing(this.state.heightAnimated, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      }),
      Animated.timing(this.state.leftAnimated, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      }),
      Animated.timing(this.state.bottomAnimated, {
        toValue: 0,
        duration: 500,
        easing: Easing.circle
      })
    ]).start();
  }

  hideCalanderBubble() {
    this.setState({ opacityView: false });
    Animated.parallel([
      Animated.timing(this.state.CalanderScale, {
        toValue: 0,
        duration: 400,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderWidthAnimated, {
        toValue: 0,
        duration: 400,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderHeightAnimated, {
        toValue: 0,
        duration: 400,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderRightAnimated, {
        toValue: 0,
        duration: 400,
        easing: Easing.circle
      }),
      Animated.timing(this.state.CalanderBottomAnimated, {
        toValue: 0,
        duration: 400,
        easing: Easing.circle
      })
    ]).start();
  }

  render() {
       let {opacityView} = this.state;
    const transformWidth = this.state.widthAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, Width]
    })
    const transformHeight = this.state.heightAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, Width]
    })
    const transformLeft = this.state.leftAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -70]
    })
    const transformBottom = this.state.bottomAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -83]
    })


    const CalanderTransformWidth = this.state.CalanderWidthAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, Width]
    })
    const CalanderTransformHeight = this.state.CalanderHeightAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, Width]
    })
    const CalanderTransformRight = this.state.CalanderRightAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -40]
    })
    const CalanderTransformBottom = this.state.CalanderBottomAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -83]
    })


    return (
      <View style={[CommonStyle.container]}>
        <View style={CommonStyle.statusBar} />
        <Animated.View style={{
            position: 'absolute',
            width: transformWidth,
            height: transformHeight,
            left: transformLeft,
            bottom: transformBottom,
            borderRadius: transformWidth / 2,
            zIndex: 1000,
            transform: [{
              scale: this.state.scale
            }]
          }}>
            <LinearGradient
              start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
              colors={['rgb(251,139,100)', 'rgb(250,84,114)']}
              style={{ position: 'absolute', width: Width, height: Width, borderRadius: Width / 2 }}>
              <View style={{ flex: 1, justifyContent: "center", marginLeft: Width / 4, bottom: 25 }}>
                <TouchableOpacity>
                  <Text style={style.FontSize32}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.marginTop12}>
                  <Text style={style.FontSize32}>Share App</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.marginTop12}>
                  <Text style={style.FontSize32}>Rate This App</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.marginTop18} 
                onPress={() => this.hideBubble()}>
                  <MaterialCommunityIcons name="window-close" size={45} color='#fff' />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </Animated.View>

           <Animated.View style={{
            position: 'absolute',
            width: CalanderTransformWidth,
            height: CalanderTransformHeight,
            right: CalanderTransformRight,
            bottom: CalanderTransformBottom,
            borderRadius: CalanderTransformWidth / 2,
            zIndex: 1000,
            transform: [{
              scale: this.state.CalanderScale
            }]
          }}>
            <LinearGradient
              start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
              colors={['rgb(251,139,100)', 'rgb(250,84,114)']}
              style={{ position: 'absolute', width: Width, height: Width, borderRadius: Width / 2 }}>
              <View style={{flex:1 }}>
              <Text style={{textAlign:'center', marginTop:30, marginBottom:10, color:'#fff', fontSize:16}}>Select date to view tasks</Text>
              <CalendarPicker
                onDateChange={this.onDateChange}
                weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                previousTitle={'<'}
                nextTitle={'>'}
                height= {Width / 1.6}
                textStyle={{ fontSize: 11, color: '#fff' }}
                selectedDayStyle={{ backgroundColor: '#ccc', borderRadius: 2 }}/>
                <TouchableOpacity style={{ position:'absolute', right:70, bottom:90}}
                 onPress={() => this.hideCalanderBubble()}>
                  <MaterialCommunityIcons name="window-close" size={45} color='#fff' />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </Animated.View>

        <View style={
           opacityView 
            ?  [CommonStyle.container, { backgroundColor: "#fff", opacity:0.2 }]
            : [CommonStyle.container, { backgroundColor: "#fff"}]
          
            }>
          
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
            <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            style={[style.ScrollView, { flexDirection: 'row' }]} >
              <TouchableOpacity>
                <Text style={style.DateText}>5 July</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={style.DateText}>Today</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={style.DateText}>Tommorrow</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={style.TextmainView}>
            <ScrollView style={{ flex: 1 }}>
              <SwipeListView
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={data => (
                  <TouchableHighlight
                    onPress={_ => console.log('You touched me')}
                    style={style.rowFront}
                    underlayColor={'#fff'}>
                    <Text style={[style.fontSize20]}>{data}</Text>
                  </TouchableHighlight>
                )}
                renderHiddenRow={(data, secId, rowId, rowMap) => (
                  <View style={style.rowBack}>
                    <LinearGradient
                      start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                      colors={['#fff', 'rgb(250,235,235)']} 
                      style={style.backRightBtn}>
                      <TouchableOpacity
                        onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                        <Text style={style.delete}>Delete</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                )}
                rightOpenValue={-75}
              />
            </ScrollView>
          </View>
          <View style={style.BottomView}>
            <TouchableOpacity style={style.menuView} 
            onPress={this.showBubble.bind(this)}>
              <Image source={images.menu} />
            </TouchableOpacity>

            <TouchableOpacity style={[CommonStyle.container, style.Center]} 
            onPress={() => this.props.navigation.navigate('AddTask')}>
              <Image source={images.plus} style={style.PlusImage} />
            </TouchableOpacity>

            <TouchableOpacity style={style.calanderView} 
            onPress={this.showCalanderBubble.bind(this)}>
              <Image source={images.calander} />
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}
export default TaskMenu;
