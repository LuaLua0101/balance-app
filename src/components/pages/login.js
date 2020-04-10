import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Logo} from '../atoms';
import {SignInForm} from '../templates';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from '../../utilities/axios';

const Login = props => {
  const navigation = useNavigation();

  const getData = async () => {
    const value = await AsyncStorage.getItem('@token');
    if (value !== null) {
      axios
        .post('me')
        .then(res => {
          if (res.status === 200) {
            navigation.navigate('Main');
          }
        })
        .catch(err =>
          configs.alert.alertWithType(
            'error',
            'Đăng nhập tự động thất bại',
            err,
          ),
        );
      // navigation.navigate('Main');
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
