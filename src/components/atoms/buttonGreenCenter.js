import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonGreenCenter = props => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, styles.loginButton]}
      onPress={props.onPress}>
      <Text style={[styles.loginText]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonGreenCenter;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  loginButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
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
