import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './AuthScreen.styles';
import {translate} from '../../i18n/i18n';
import {colors} from '../../libs';
import AuthController from './AuthController';

export default class AuthScreen extends AuthController {
  signupContainer = () => {
    return (
      <TouchableOpacity onPress={() => this.signupButton()} activeOpacity={0.8}>
        <View
          style={[
            styles.signupContainer,
            {
              backgroundColor:
                this.state.authButton == true ? colors.darkBlue : colors.white,
            },
          ]}>
          <Text
            style={[
              styles.authText,
              {
                color:
                  this.state.authButton == true
                    ? colors.white
                    : colors.darkBlue,
              },
            ]}>
            {translate.AuthScreen.signup}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  loginContainer = () => {
    return (
      <TouchableOpacity onPress={() => this.loginButton()} activeOpacity={0.8}>
        <View
          style={[
            styles.loginContainer,
            {
              backgroundColor:
                this.state.authButton == false ? colors.darkBlue : colors.white,
            },
          ]}>
          <Text
            style={[
              styles.authText,
              {
                color:
                  this.state.authButton == false
                    ? colors.white
                    : colors.darkBlue,
              },
            ]}>
            {translate.AuthScreen.login}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heraderBackground} />
        <View style={styles.authContainer}>
          {this.signupContainer()}
          {this.loginContainer()}
        </View>
        <View style={styles.bodyComponent}>{/* <Input /> */}</View>
      </View>
    );
  }
}
