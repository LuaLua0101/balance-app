import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextBox, ButtonBlue, ButtonGreen} from '../atoms';
import {PHONE, PASSWORD} from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';
import useFormInput from '../../utilities/useFormInput';
import axios from '../../utilities/axios';
import {useGlobalState} from '../../../store';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';

const SignInForm = props => {
  const navigation = useNavigation();
  const phone = useFormInput('0922224345');
  const password = useFormInput('123456');
  const [configs] = useGlobalState('configs');

  const updateFcm = fcm_token => {
    axios
      .post('updateFCM', {
        fcm_token,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const getToken = async () => {
    let fcmToken = await firebase.messaging().getToken();
    console.log(fcmToken);
    updateFcm(fcmToken);
  };

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      getToken();
    } catch (error) {
      console.log('permission rejected');
    }
  };

  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const login = () => {
    axios
      .post('login', {
        phone: phone.value,
        password: password.value,
      })
      .then(res => {
        if (res.status === 200) {
          AsyncStorage.setItem('@token', 'Bearer ' + res.data.token).then(
            () => {
              // configs.alert.alertWithType('info', 'Đăng nhập thành công', '');
              checkPermission();
              navigation.navigate('Main');
            },
          );
        }
      })
      .catch(err =>
        configs.alert.alertWithType('error', 'Đăng nhập thất bại', ''),
      );
  };

  return (
    <View style={styles.container}>
      <TextBox type={PHONE} {...phone} />
      <TextBox type={PASSWORD} {...password} />

      <TouchableOpacity
        style={styles.btnForgotPassword}
        onPress={() => this.onClickListener('restore_password')}>
        <Text style={styles.btnText}>Forgot your password?</Text>
      </TouchableOpacity>

      <ButtonBlue text="Đăng nhập" onPress={login} />
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
