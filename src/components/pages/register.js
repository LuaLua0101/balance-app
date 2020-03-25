import React from 'react';
import {View} from 'react-native';
import {Logo} from '../atoms';
import {SignUpForm} from '../templates';

const Register = props => {
  return (
    <>
      <Logo
        source={require('../../../assest/logo.png')}
        style={{marginBottom: 0, backgroundColor: '#fff'}}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        <SignUpForm />
      </View>
    </>
  );
};

export default Register;
