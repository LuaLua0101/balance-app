import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonShowMore = props => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, styles.loginButton]}
      onPress={props.onPress}>
      <Text style={[styles.loginText]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonShowMore;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#8fbd40',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 10,
  },
  loginText: {
    color: 'white',
  },
});
