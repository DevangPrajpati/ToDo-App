import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo';
import style from './style';
import CommonStyle from './../appConfig/commonStyles';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;




class Test extends Component {

  render() {

    return (
      <View style={[CommonStyle.container]}>
        <View style={CommonStyle.statusBar} />
        <LinearGradient
          start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
          colors={['rgb(251,139,100)', 'rgb(250,84,114)']}
          style={{ height: Height / 1.4, width: Width / 0.82, borderRadius: (Width / 0.82) / 2, position: "absolute", bottom: -40, left: -60 }}>

          <View style={{ flex: 1.5, justifyContent: "center", marginLeft: Width / 3, marginTop:40 }}>
            <Text style={{fontSize:32, color:'#fff'}}> Settings</Text>
          </View>
          <View style={{ flex: 1.5, justifyContent: "center", marginLeft: Width / 3   }}>
            <Text style={{fontSize:32, color:'#fff'}}>Share App</Text>
          </View>

          <View style={{ flex: 1.5, justifyContent: "center", marginLeft: Width / 3 }}>
            <Text style={{fontSize:32, color:'#fff'}}>Rate This App</Text>
          </View>
          <TouchableOpacity style={{ flex: 2, justifyContent: "center", marginLeft: Width / 3, bottom:20  }}>
          <MaterialCommunityIcons name="window-close" size={45} color='#fff' />
          </TouchableOpacity>

        </LinearGradient>
      </View>

    );
  }
}
export default Test;



// import React, { Component } from 'react';
// import { TouchableWithoutFeedback, View, Text, Easing, ImageBackground, TextInput, Animated, ListView, Dimensions, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { LinearGradient } from 'expo';
// import style from './style';
// import CommonStyle from './../appConfig/commonStyles';
// import images from "./../images";
// import { SwipeListView } from 'react-native-swipe-list-view';

// const Width = Dimensions.get('window').width;
// const Height = Dimensions.get('window').height;
// const size = Math.min(Width, Height) - 1;
// const ArrayData = [
//   {
//     value: 'Send first design draft of flower website landing page'
//   }, {
//     value: 'Checkout website design inspiration on uplabs'
//   }, {
//     value: 'Book online ticket for Udaipur'
//   }];


// class TaskMenu extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       listViewData: ArrayData.map((d, i) => d.value),
//       openView: 'false',
//       scale: new Animated.Value(0),
//       widthAnimated: new Animated.Value(0),
//       heightAnimated: new Animated.Value(0),
//       leftAnimated: new Animated.Value(0),
//       bottomAnimated: new Animated.Value(0)
//     };
//     // this.showBubble = this.showBubble.bind(this);
//   }

//   componentWillMount(){
//     this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    
//   }

//   deleteRow(secId, rowId, rowMap) {
//     rowMap[`${secId}${rowId}`].closeRow();
//     const newData = [...this.state.listViewData];
//     newData.splice(rowId, 1);
//     this.setState({ listViewData: newData });
//   }
//   // componentDidMount() {
//   //   Animated.timing(this.state.scale, {
//   //     toValue: 4,
//   //     duration: 1000,
//   //     easing: Easing.linear
//   //   }).start();
//   // }
//   showBubble() {
//     console.log("show bubble called");
//     this.state.scale.setValue(0);
//     this.state.widthAnimated.setValue(0);
//     this.state.heightAnimated.setValue(0);
//     this.state.leftAnimated.setValue(0);
//     this.state.bottomAnimated.setValue(0);
//     Animated.parallel([

//       Animated.timing(this.state.scale, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.circle
//       }),
//       Animated.timing(this.state.widthAnimated, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.circle
//       }),
//       Animated.timing(this.state.heightAnimated, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.circle
//       }),
//       Animated.timing(this.state.leftAnimated, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.circle
//       }),
//       Animated.timing(this.state.bottomAnimated, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.circle
//       })

//     ]).start();

//     setTimeout(() => {
//       console.log("about to hide bubble");
//       this.hideBubble();
//     }, 5000)
//   }

//   hideBubble() {
//     Animated.parallel([

//       Animated.timing(this.state.scale, {
//         toValue: 0,
//         duration: 400,
//         easing: Easing.circle
//       }),
//       Animated.timing(this.state.widthAnimated, {
//         toValue: 0,
//         duration: 400,
//         easing: Easing.circle
//       }),
//       Animated.timing(this.state.heightAnimated, {
//         toValue: 0,
//         duration: 400,
//         easing: Easing.circle
//       }),
//       Animated.timing(this.state.leftAnimated, {
//         toValue: 0,
//         duration: 400,
//         easing: Easing.circle
//       }),
//       Animated.timing(this.state.bottomAnimated, {
//         toValue: 0,
//         duration: 400,
//         easing: Easing.circle
//       })

//     ]).start();
//   }

//   _toggleModal = () =>
//     this.setState({ openView: 'true' });

//   render() {
//     console.log("listViewData--->", this.state.listViewData);

//     var outputHeight = Width + 60;
//     var outputLeft = -40;

//     const transformWidth = this.state.widthAnimated.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, outputHeight]
//     })
//     const transformHeight = this.state.heightAnimated.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, outputHeight]
//     })
//     const transformLeft = this.state.leftAnimated.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, outputLeft]
//     })
//     const transformBottom = this.state.bottomAnimated.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, -90]
//     })
//     return (
//       <View style={[CommonStyle.container]}>
//         <View style={CommonStyle.statusBar} />
        
//         <View style={[CommonStyle.container, { backgroundColor: "#fff" }]}>
//           <Animated.View style={{
//             position: 'absolute',
//             // backgroundColor: '#ccc',
//             width: transformWidth,
//             height: transformHeight,
//             left: transformLeft,
//             bottom: transformBottom,
//             borderRadius: (size * 1.2) / 2,
//             zIndex:1000,
//             transform: [{
//               scale: this.state.scale
//             }]
//           }}>
//             <Animated.View style={{width: '100%',height: '100%'}}>
//               <LinearGradient
//                 start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
//                 colors={['rgb(251,139,100)', 'rgb(250,84,114)']}
//                 style={{position:'absolute',width:outputHeight,height:outputHeight,borderRadius:outputHeight/2}}
//                 >

//                 <View style={{ flex: 1, justifyContent: "center", marginLeft: Width / 4 }}>
//                  <TouchableOpacity>
//                   <Text style={{fontSize:32, color:'#fff'}}> Settings</Text>
//                   </TouchableOpacity>
//                    <TouchableOpacity style={{marginTop: Height / 40 }}>
//                   <Text style={{fontSize:32, color:'#fff'}}>Share App</Text>
//                   </TouchableOpacity>
//                    <TouchableOpacity style={{marginTop: Height / 40 }}>
//                   <Text style={{fontSize:32, color:'#fff'}}>Rate This App</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={{marginTop: Height / 30 }}>
//                 <MaterialCommunityIcons name="window-close" size={45} color='#fff' />
//                 </TouchableOpacity>


//                 </View>
//                 {/* <View style={{ flex: 1, justifyContent: "center", marginLeft: Width / 3   }}>
//                 </View>

//                 <View style={{ flex: 1, justifyContent: "center", marginLeft: Width / 3 }}>
//                 </View>
//                 <TouchableOpacity style={{justifyContent: "center", marginLeft: Width / 3,  }}>
//                 <MaterialCommunityIcons name="window-close" size={45} color='#fff' />
//                 </TouchableOpacity> */}

//               </LinearGradient>
//             </Animated.View>
//           </Animated.View>
//           <View style={CommonStyle.container}>
//             <LinearGradient
//               start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
//               colors={['rgb(251, 141, 99)', 'rgb(250, 85, 113)']}
//               style={style.RoundView1}>
//             </LinearGradient>
//             <LinearGradient
//               start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
//               colors={['rgb(251, 141, 99)', 'rgb(250, 85, 113)']}
//               style={style.RoundView2}>
//             </LinearGradient>
//             <LinearGradient
//               start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
//               colors={['rgb(251, 141, 99)', 'rgb(250, 85, 113)']}
//               style={style.RoundView3}>
//             </LinearGradient>
//             <Text style={style.UsernameText}>Himanshu</Text>
//             <Text style={style.taskText1}>You have 2 remaining</Text>
//             <Text style={style.taskText2}>tasks for today!</Text>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[style.ScrollView, { flexDirection: 'row' }]} >
//               <TouchableOpacity>
//                 <Text style={{ fontSize: 35, marginHorizontal:20 }}>5 July</Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Text style={{ fontSize: 35, marginHorizontal:20 }}>Today</Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Text style={{ fontSize: 35, marginHorizontal:20 }}>Tommorrow</Text>
//               </TouchableOpacity>
//             </ScrollView>
//           </View>
//           <View style={style.TextmainView}>
//             <View style={CommonStyle.container}>
//               <ScrollView>
//                 {/* <Text style={style.fontSize20}>Send first design draft of flower </Text>
//                 <Text style={style.fontSize20}>website landing page </Text>
//                 <Text style={[style.fontSize20, { paddingTop: 18 }]}>Checkout website design inspiration</Text>
//                 <Text style={[style.fontSize20]}>on uplabs</Text>
//                 <Text style={[style.fontSize20, { paddingTop: 30 }]}>Book online ticket for Udaipur</Text> */}
//                 <SwipeListView
//                   dataSource={this.ds.cloneWithRows(this.state.listViewData)}
//                   renderRow={data => (
//                     <TouchableHighlight
//                       onPress={_ => console.log('You touched me')}
//                       style={style.rowFront}
//                       underlayColor={'#fff'}>
//                       <Text style={[style.fontSize20]}>{data}</Text>
//                       {/* <Text style={style.fontSize20}>Send first design draft of flower </Text> */}

//                     </TouchableHighlight>
//                   )}
//                   renderHiddenRow={(data, secId, rowId, rowMap) => (
//                     <View style={style.rowBack}>
//                       <LinearGradient
//                         start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
//                         colors={['#fff', 'rgb(250,235,235)']} style={style.backRightBtn}>
//                         <TouchableOpacity
//                           onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
//                           <Text style={{ color: 'red', fontSize: 16 }}>Delete</Text>
//                         </TouchableOpacity>
//                       </LinearGradient>
//                     </View>
//                   )}
//                   rightOpenValue={-75}
//                 />
//               </ScrollView>


//             </View>
//             <View style={style.BottomView}>
//               <TouchableOpacity style={style.menuView} onPress={this.showBubble.bind(this)}>
//                 <Image source={images.menu} />
//               </TouchableOpacity>

//               <TouchableOpacity style={[CommonStyle.container, style.Center]} onPress={() => this.props.navigation.navigate('AddTask')}>
//                 <Image source={images.plus} style={style.PlusImage} />
//               </TouchableOpacity>

//               <TouchableOpacity style={style.calanderView}>
//                 <Image source={images.calander} />
//               </TouchableOpacity>

//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
// export default TaskMenu;
