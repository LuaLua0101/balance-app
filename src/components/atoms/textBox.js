import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import {EMAIL, PHONE, PASSWORD} from '../../utilities/constants';

const TextBox = props => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.inputs}
      placeholder={
        props.placeholder
          ? props.placeholder
          : props.type === EMAIL
          ? 'Nhập email'
          : props.type === PHONE
          ? 'Nhập số điện thoại'
          : props.type === PASSWORD
          ? 'Nhập mật khẩu'
          : ''
      }
      keyboardType={
        props.type === EMAIL
          ? 'email-address'
          : props.type === PHONE
          ? 'numeric'
          : 'default'
      }
      secureTextEntry={props.type === PASSWORD}
      underlineColorAndroid="transparent"
    />
    <Image
      style={styles.inputIcon}
      source={{
        uri:
          props.type === EMAIL
            ? 'https://img.icons8.com/nolan/40/000000/email.png'
            : props.type === PHONE
            ? 'https://img.icons8.com/nolan/40/000000/phone.png'
            : props.type === PASSWORD
            ? 'https://img.icons8.com/nolan/40/000000/key.png'
            : 'https://img.icons8.com/flat_round/40/000000/secured-letter.png',
      }}
    />
  </View>
);

export default TextBox;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
});
