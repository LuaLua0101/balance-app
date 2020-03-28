import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonGreen = props => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, styles.loginButton]}
      onPress={props.onPress}>
      <Text style={styles.loginText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonGreen;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#4dc4ff',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: '#fff',
    fontFamily: 'GeomanistRegular',
  },
});
