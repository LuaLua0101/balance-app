import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextBox, DateSelector, ButtonGreen} from '../atoms';
import {EMAIL, PHONE, PASSWORD} from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';
import {Icon, Item, Picker, Spinner} from 'native-base';
import useFormInput from '../../utilities/useFormInput';
import axios from '../../utilities/axios';
import moment from 'moment';

const EitUserInfoForm = props => {
  const navigation = useNavigation();
  const [updating, setUdating] = useState(false);
  const name = useFormInput(props.name);
  const address = useFormInput(props.address);
  // const dob = useFormInput(props.dob);
  const gender = useFormInput(props.gender);
  const phone = useFormInput(props.phone);
  const email = useFormInput(props.email);

  const update = () => {
    axios
      .post('updatePersonalInfo', {
        name: name.value,
        gender: gender.value,
        address: address.value,
        // dob: moment(dob.value, 'YYYY-MM-DD'),
        phone: phone.value,
        email: email.value,
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          props.updateData({
            name: name.value,
            gender: gender.value,
            address: address.value,
            phone: phone.value,
            email: email.value,
          });
          props.activeView();
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <TextBox placeholder="Nhập họ tên" {...name} />
      <TextBox placeholder="Nhập địa chỉ nhà" {...address} />
      {/* <DateSelector {...dob} /> */}
      <Item
        style={{
          width: 300,
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          height: 45,
          marginBottom: 10,
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
      {updating ? (
        <Spinner />
      ) : (
        <ButtonGreen text="Thay đổi thông tin cá nhân" onPress={update} />
      )}
    </View>
  );
};

export default EitUserInfoForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
