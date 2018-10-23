import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import style from './style';
import CommonStyle from './../appConfig/commonStyles';
import images from "./../images";
const digitArray = [];


class SendOTP extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // mobileNo : this.props.navigation.state.params.mobileNO,
      value: '',
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
      counter: 0,
      tempCounter: 0,
      OTP: ''
    }
  }
  focus() {
    this.field.focus();
  }

  componentWillMount() {
    console.log("this.props.navigation.state.params.code===>", this.props.navigation.state.params.code);
  }

  _handlePress(a) {
    if (a === '00') {
      if (this.state.counter === 0) {
        a = '0';
        this.setState({ digit1: a });
        digitArray.push(a);
        this.setState({ digit2: a });
        digitArray.push(a);
        this.setState({ counter: this.state.counter + 2 })
        return false;
      } else if (this.state.counter === 1) {
        a = '0';
        this.setState({ digit2: a });
        digitArray.push(a);
        this.setState({ digit3: a });
        digitArray.push(a);
        this.setState({ counter: this.state.counter + 2 })
        return false;
      } else if (this.state.counter === 2) {
        a = '0';
        this.setState({ digit3: a });
        digitArray.push(a);
        this.setState({ digit4: a });
        digitArray.push(a);
        this.setState({ counter: this.state.counter + 2 });
        return false;
      } else if (this.state.counter === 3) {
        a = '0';
        this.setState({ digit4: a });
        digitArray.push(a);
        this.setState({ counter: this.state.counter + 1 });
        let OTPCode = digitArray[0].toString() + digitArray[1].toString() + digitArray[2].toString() + digitArray[3].toString();
        console.log("OTPCode-->", OTPCode);
        console.log("Code-->", this.props.navigation.state.params.code);

        if (OTPCode === this.props.navigation.state.params.code) {
          console.log("Success");

          this.props.navigation.navigate('MobileVerified');
        }
        return false;
      }
    } else {
      if (this.state.counter === 0) {
        this.setState({ digit1: a });
        digitArray.push(a);
        this.setState({ counter: this.state.counter + 1 })

        return false;
      } else if (this.state.counter === 1) {
        this.setState({ digit2: a });
        digitArray.push(a);
        this.setState({ counter: this.state.counter + 1 })

        return false;

      } else if (this.state.counter === 2) {
        this.setState({ digit3: a });
        digitArray.push(a);
        this.setState({ counter: this.state.counter + 1 });

        return false;
      } else if (this.state.counter === 3) {
        this.setState({ digit4: a });
        digitArray.push(a);
        this.setState({ counter: this.state.counter + 1 });
        let OTPCode = digitArray[0].toString() + digitArray[1].toString() + digitArray[2].toString() + digitArray[3].toString();
        let Oldotp = this.props.navigation.state.params.code;
        console.log("OTPCode-->", OTPCode);
        console.log("Code-->", Oldotp);
        if (OTPCode === Oldotp) {
          console.log("Success");
          this.props.navigation.navigate('MobileVerified');
        return false;

        }
      }
    }



    if (this.state.counter > 4) {
      this.setState({ counter: 0 })
    }
  }


  ClearDigit() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
    digitArray.pop();
    if (this.state.counter === 4) {
      this.setState({ digit4: '' });
    } else if (this.state.counter === 3) {
      this.setState({ digit3: '' });
    } else if (this.state.counter === 2) {
      this.setState({ digit2: '' });
    } else if (this.state.counter === 1) {
      this.setState({ digit1: '' });
    }
  }

  ResendOTP() {
    let mobileNo = this.props.navigation.state.params.mobileNo;
    let code = Math.floor(1000 + Math.random() * 9000);
    let message = "Your verification code is:" + code;
    let senderid = "JK-INST";
    let url = 'http://api.msg91.com/api/sendotp.php?authkey=225571ALZQhSveJ5b558393&mobile=' + mobileNo + '&message=' + message + '&sender=senderid&otp=' + code;

    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("success");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let MobileNo = this.props.navigation.state.params.mobileNo;
    let Code = this.props.navigation.state.params.code;

    return (
      <View style={CommonStyle.container}>
        <View style={CommonStyle.statusBar} />
        <ImageBackground source={images.backgroundOTP} style={style.BgImage}>
          <View style={[style.IconView]}>
            <Ionicons name="md-close" size={22} color="black" />
          </View>
          <View style={[style.Center, CommonStyle.container]}>
            <Text style={[style.fontSize22, style.fontBold]}>Mobile number verifiication</Text>
          </View>
          <View style={style.inputMainView}>
            <View style={[style.Center, style.plusView]}>
              <Text style={style.fontSize16}> +91 </Text>
            </View>
            <View style={style.MobileView}>
              {/* { MobileNo 
              ? <Text style={style.fontSize18} >{MobileNo}</Text>
              : null } */}
              <Text style={style.fontSize18} >9897979795</Text>

            </View>

            <TouchableOpacity style={style.OTPview} onPress={() => this.ResendOTP()}>
              <Text style={style.ResendText} >Resend OTP  </Text>
            </TouchableOpacity>
          </View>

          <View style={style.greenView}>
            <View style={[style.Center, CommonStyle.container]}>
              <Feather name="check" size={15} color='rgb(117, 197, 123)' />
            </View>
            <View style={style.CheckView}>
              <Text style={style.OTPtext}>4 Digit OTP sent on above mobile number</Text>
            </View>
          </View>
          <View style={[style.Center, style.OTPBelowView]} >
            <Text style={[style.fontSize20, style.fontBold]}>Enter OTP below</Text>
          </View>
          <View style={style.OTPsetView}>
            <TouchableWithoutFeedback onPress={() => { this.focus() }}>
              <View style={style.OTPdigitView}>

                {this.state.digit1
                  ? <View style={
                    this.state.counter === 1
                      ? style.inputfield1
                      : style.inputfield
                  }>
                    <Text style={style.text}>{digitArray[0]}</Text>
                  </View>
                  : <View style={[style.inputfield]}>
                    <Octicons name="primitive-dot" size={28} color="rgb(225, 225, 225)" style={style.paddingLeft20} />
                  </View>
                }
                {this.state.digit2
                  ? <View style={
                    this.state.counter === 2
                      ? style.inputfield1
                      : style.inputfield
                  }>
                    <Text style={style.text}>{digitArray[1]}</Text>
                  </View>
                  : <View style={[style.inputfield]}>
                    <Octicons name="primitive-dot" size={28} color="rgb(225, 225, 225)" style={style.paddingLeft20} />
                  </View>
                }
                {this.state.digit3
                  ? <View style={
                    this.state.counter === 3
                      ? style.inputfield1
                      : style.inputfield
                  }>
                    <Text style={style.text}>{digitArray[2]}</Text>
                  </View>
                  : <View style={[style.inputfield]}>
                    <Octicons name="primitive-dot" size={28} color="rgb(225, 225, 225)" style={style.paddingLeft20} />
                  </View>
                }
                {this.state.digit4
                  ? <View style={
                    this.state.counter === 4
                      ? style.inputfield1
                      : style.inputfield
                  }>
                    <Text style={style.text}>{digitArray[3]}</Text>
                  </View>
                  : <View style={[style.inputfield]}>
                    <Octicons name="primitive-dot" size={28} color="rgb(225, 225, 225)" style={style.paddingLeft20} />
                  </View>
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
                onPress={() => this._handlePress('0')}>
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
    )
  }
}
export default SendOTP;