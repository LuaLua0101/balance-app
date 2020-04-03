import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextBox, DateSelector, ButtonGreen} from '../atoms';
import {EMAIL, PHONE, PASSWORD} from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';
import {Icon, Item, Picker} from 'native-base';
import useFormInput from '../../utilities/useFormInput';

const EitUserInfoForm = props => {
  const navigation = useNavigation();
  const name = useFormInput(props.name);
  const address = useFormInput(props.address);
  const dob = useFormInput(props.dob);
  const gender = useFormInput(props.gender);
  const phone = useFormInput(props.phone);
  const password = useFormInput(props.password);
  const email = useFormInput(props.email);

  return (
    <View style={styles.container}>
      <TextBox placeholder="Nhập họ tên" {...name} />
      <TextBox placeholder="Nhập địa chỉ nhà" {...address} />
      <DateSelector {...dob} />
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
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          selectedValue={gender.value}
          onValueChange={value => gender.setValue(value)}>
          <Picker.Item label="Nữ" value={0} />
          <Picker.Item label="Nam" value={1} />
        </Picker>
      </Item>
      <TextBox type={EMAIL} {...email} />
      <TextBox type={PHONE} {...phone} />
      <TextBox type={PASSWORD} {...password} />
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
