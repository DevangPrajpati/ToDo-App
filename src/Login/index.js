import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import style from './style';
import CommonStyle from './../appConfig/commonStyles';
import images from "./../images";
import * as firebase from 'firebase';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // mobileNo: null,
      value: '',
      digit: '',
    }
  }

 

  focus() {
    this.field.focus();
  }

  _handlePress(a) {
    if (a === '00') {
      if (this.state.digit.length === 9) {
         a = 0;
        this.setState({ digit: this.state.digit.toString() + a });
      } else {
        this.setState({ digit: this.state.digit.toString() + a });
      }

    } else if (this.state.digit.length < 10) {
      this.setState({ digit: this.state.digit.toString() + a });
    }
  }

  ClearDigit() {
    this.setState({ digit: this.state.digit.slice(0, -1) });
  }

  SendOTP() {
    const mobileNo = this.state.digit;
    let code =  Math.floor(1000 + Math.random() * 9000);
    let message="Your verification code is:"+code;
    let senderid="JK-INST";
    let url = 'http://api.msg91.com/api/sendotp.php?authkey=225571ALZQhSveJ5b558393&mobile=' + mobileNo + '&message='+ message +'&sender=senderid&otp=' + code;

    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.props.navigation.navigate('SendOTP', {mobileNo : mobileNo, code : code });
      // return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {

    return (

      <View style={CommonStyle.container}>
        <View style={CommonStyle.statusBar} />
        <ImageBackground source={images.BackgroundImage} style={style.BgImage}>
          <View style={[style.IconView]}>
            <Ionicons name="md-close" size={22} color="black" />
          </View>
          <View style={[style.Center, CommonStyle.container]}>
            <Text style={style.fontsize22}>Mobile number verifiication</Text>
          </View>
          {this.state.digit && this.state.digit.length == 10

            ? <View style={[style.Center, { flex: 2 }]}>
              <Image source={images.mobile_set} style={style.image2} />
            </View>
            : <View style={[style.Center, { flex: 2 }]}>
              <Image source={images.Mobile1} style={style.image} />
            </View>
          }
          <View style={[style.Center, { flex: 3 }]}>
            <Text style={[style.fontsize16]}>Please enter your mobile number</Text>
      <TouchableWithoutFeedback onPress={() => { this.focus(); }}>

            <View style={style.inputMainView}>
              <View style={[style.Center, style.plusView]}>
                <Text style={{fontSize: 18, fontFamily: 'Roboto-Regular'}}> +91 </Text>
              </View>
              <View style={style.mobileMainView}>
              <TextInput
                placeholder="mobile number"     
                maxLength={10}
                editable={false}
                underlineColorAndroid="transparent"
                style={{fontSize: 18, fontFamily: 'Roboto-Regular'}}
            
                 value={this.state.digit}
                 placeholder="mobile number"
                onChangeText={(digit)=> this.setState({digit})}
               />
                {/* {this.state.digit && this.state.digit.length <= 10
                  ? <Text style={{ fontSize: 18, fontFamily: 'Roboto-Regular' }} >{this.state.digit}</Text>
                  : <Text style={style.MnoText} >mobile number</Text>
                } */}
              </View>
              {this.state.digit && this.state.digit.length == 10
                ? <TouchableOpacity style={style.OTPview} onPress={() => this.SendOTP()}>
                  <Text style={style.SendOTPtext} >Send OTP</Text>
                </TouchableOpacity>
                : null
              }
            </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={[style.DigitMainView]}>
            <View style={style.SubView}>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(1)}>
                <Text style={[style.Digit]}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(2)}>
                <Text style={[style.Digit]}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(3)}>
                <Text style={[style.Digit]}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={style.SubView}>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(4)}>
                <Text style={[style.Digit]}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(5)}>
                <Text style={[style.Digit]}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(6)}>
                <Text style={[style.Digit]}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={style.SubView}>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(7)}>
                <Text style={[style.Digit]}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(8)}>
                <Text style={[style.Digit]}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(9)}>
                <Text style={[style.Digit]}>9</Text>
              </TouchableOpacity></View>
            <View style={style.SubView}>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress('00')}>
                <Text style={[style.Digit]}>00</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this._handlePress(0)}>
                <Text style={[style.Digit]}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[style.Center, style.digitView]} 
              onPress={() => this.ClearDigit()}>
                <Image source={images.closed} style={style.CloseImage} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>

    );
  }
}
export default Login;