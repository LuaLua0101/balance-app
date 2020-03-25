import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextBox, ButtonBlue, ButtonGreen} from '../atoms';
import {PHONE, PASSWORD} from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';

const SignInForm = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextBox type={PHONE} />
      <TextBox type={PASSWORD} />

      <TouchableOpacity
        style={styles.btnForgotPassword}
        onPress={() => this.onClickListener('restore_password')}>
        <Text style={styles.btnText}>Forgot your password?</Text>
      </TouchableOpacity>

      <ButtonBlue
        text="Đăng nhập"
        onPress={() => navigation.navigate('Main')}
      />
      <ButtonGreen
        text="Đăng ký"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  btnText: {
    color: '#8b929b',
  },
});
