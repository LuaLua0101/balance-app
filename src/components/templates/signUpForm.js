import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextBox, ButtonBlue, ButtonGreen} from '../atoms';
import {EMAIL, PHONE, PASSWORD} from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';
import useFormInput from '../../utilities/useFormInput';
import axios from '../../utilities/axios';
import {useGlobalState} from '../../../store';

const SignUpForm = props => {
  const navigation = useNavigation();

  const name = useFormInput();
  const email = useFormInput();
  const phone = useFormInput();
  const password = useFormInput();
  const [configs] = useGlobalState('configs');

  const register = () => {
    axios
      .post('register', {
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          configs.alert.alertWithType(
            'success',
            'Đăng ký thành công',
            'Vui lòng đăng nhập để tiếp tục',
          );
          navigation.navigate('Login');
        }
      })
      .catch(err =>
        configs.alert.alertWithType(
          'error',
          'Đăng ký thất bại',
          'Vui lòng thử lại',
        ),
      );
  };

  return (
    <View style={styles.container}>
      <TextBox placeholder="Nhập họ tên" {...name} />
      <TextBox type={EMAIL} {...email} />
      <TextBox type={PHONE} {...phone} />
      <TextBox type={PASSWORD} {...password} />

      <ButtonBlue text="Đăng ký" onPress={register} />
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
