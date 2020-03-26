import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextBox, DateSelector, ButtonGreen} from '../atoms';
import {EMAIL, PHONE, PASSWORD} from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';
import {Icon, Content, Form, Item, Picker, Spinner} from 'native-base';

const EitUserInfoForm = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextBox placeholder="Nhập họ tên" />
      <TextBox placeholder="Nhập địa chỉ nhà" />
      <DateSelector />
      <Item
        style={{
          width: 300,
          backgroundColor: '#FFFFFF',
          borderRadius: 30,
          height: 45,
          marginBottom: 20,
          shadowColor: '#808080',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Picker mode="dropdown" iosIcon={<Icon name="arrow-down" />}>
          <Picker.Item label="Nữ" value="f" />
          <Picker.Item label="Nam" value="m" />
        </Picker>
      </Item>
      <TextBox type={EMAIL} />
      <TextBox type={PHONE} />
      <ButtonGreen
        text="Thay đổi thông tin cá nhân"
        onPress={props.activeView}
      />
    </View>
  );
};

export default EitUserInfoForm;

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
