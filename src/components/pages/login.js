import React from 'react';
import {View} from 'react-native';
import {Logo} from '../atoms';
import {SignInForm} from '../templates';

const Login = props => {
  return (
    <>
      <Logo
        source={require('../../../assets/logo.png')}
        style={{marginBottom: 0, backgroundColor: '#fff'}}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        <SignInForm />
      </View>
    </>
  );
};

export default Login;
