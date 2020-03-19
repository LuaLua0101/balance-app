import React from 'react';
import {View} from 'react-native';
import {Logo, Button} from './src/components/atoms';

const Menu = props => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <Logo source={require('./assest/logo.png')} />
      </View>
      <View>
        <Button text="Trang chủ" link />
        <Button text="Khóa học" link />
        <Button text="Đăng xuất" link />
      </View>
    </View>
  );
};
export default Menu;
