import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import style from './style';
import CommonStyle from './../appConfig/commonStyles';
import images from "./../images";



class MobileVerified extends Component {

  render() {

    return (
      <View style={[CommonStyle.container]}>
        <View style={CommonStyle.statusBar} />
        <ImageBackground source={images.SuccessBG} style={[style.BgImage]}>
          <View style={style.MainView}>
            <View style={[style.Center, style.subView]}>
              <View style={[style.Center, style.ImageView]}>
                <Image source={images.right_icon} style={style.image} />
              </View>
              <View style={[style.Center, style.TextView]}>
                <Text style={style.AwesomeText}>Awesome!</Text>
              </View>
              <View style={[style.Center, style.TextView]}>
                <Text style={style.Font}>Your Phone number has been verified</Text>
                <Text style={[style.Center, style.Text]}>successfully</Text>
              </View>
              <View style={[style.Center, style.buttonView]}>
                <TouchableOpacity>
                  <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['rgb(252, 148, 74)','rgb(249, 100, 144)']}
                    style={[style.Center, style.buttonsubview, ]} >
                    <Text style={style.buttonText}>Okay</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

    );
  }
}
export default MobileVerified;