import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextBox, ButtonBlue, ButtonGreen} from '../atoms';
import {EMAIL, PHONE, PASSWORD} from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';

const SignUpForm = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextBox placeholder="Nhập họ tên" />
      <TextBox type={EMAIL} />
      <TextBox type={PHONE} />
      <TextBox type={PASSWORD} />

      <ButtonBlue text="Đăng ký" onPress={() => navigation.navigate('Main')} />
      <ButtonGreen
        text="Đăng nhập"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SignUpForm;

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
