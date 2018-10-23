import React, { Component } from "react";
import { TouchableWithoutFeedback, TextInput } from "react-native";
import { View, Text } from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as signUpActions from "../../actions/signUpAction";
import styles from "./styles";

class OTPComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
      highlightNumber: 0,
      text: "",
      errorText: undefined,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ errorText: props.errorText });
  }

  focus() {
    this.field.focus();
  }

  clearState() {
    this.setState({
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
      highlightNumber: 0,
      text: "",
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => { this.focus(); }}>
        <View>
          <TextInput
            maxLength={6}
            autoFocus
            style={styles.hiddenField}
            keyboardType="numeric"
            value={this.state.text}
            ref={(c) => { this.field = c; }}
            underlineColorAndroid="transparent"
            onChangeText={(text) => {
              const chars = text.chars();
              this.setState({
                code1: chars[0],
                code2: chars[1],
                code3: chars[2],
                code4: chars[3],
                code5: chars[4],
                code6: chars[5],
                highlightNumber: text.length + 1,
                text,
                errorText: undefined,
              });
              if (text.length === 6) {
                this.props.codeEntered(text);
              }
            }}
          />
          <View style={{flexDirection: "row"}}>
            <View style={[styles.inputfield, this.state.highlightNumber <= 1 ? styles.inputHighlight : {}, this.state.errorText ? styles.inputError : {}]}>
              <Text style={styles.text}>{this.state.code1}</Text>
            </View>
            <View style={[styles.inputfield, this.state.highlightNumber === 2 ? styles.inputHighlight : {}, this.state.errorText ? styles.inputError : {}]}>
              <Text style={styles.text}>{this.state.code2}</Text>
            </View>
            <View style={[styles.inputfield, this.state.highlightNumber === 3 ? styles.inputHighlight : {}, this.state.errorText ? styles.inputError : {}]}>
              <Text style={styles.text}>{this.state.code3}</Text>
            </View>
            <View style={[styles.inputfield, this.state.highlightNumber === 4 ? styles.inputHighlight : {}, this.state.errorText ? styles.inputError : {}]}>
              <Text style={styles.text}>{this.state.code4}</Text>
            </View>
            <View style={[styles.inputfield, this.state.highlightNumber === 5 ? styles.inputHighlight : {}, this.state.errorText ? styles.inputError : {}]}>
              <Text style={styles.text}>{this.state.code5}</Text>
            </View>
            <View style={[styles.inputfield, this.state.highlightNumber >= 6 ? styles.inputHighlight : {}, this.state.errorText ? styles.inputError : {}]}>
              <Text style={styles.text}>{this.state.code6}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(signUpActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OTPComponent);