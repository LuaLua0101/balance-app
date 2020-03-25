import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Logo, ButtonGreenCenter} from '../atoms';
import {Icon, Content, Form, Item, Picker, Spinner} from 'native-base';
import MainHeader from '../../../menu';
import {UserInfoTab} from '../organisms';
import DatePicker from 'react-native-datepicker';

const VIEW = 0;
const EDIT = 1;
const LOADING = 2;

const EditUserInfo = props => {
  return (
    <Form style={{marginTop: 20}}>
      <Item fixedLabel last>
        <Icon name="user" type="AntDesign" />
        <TextInput placeholder="nhập họ tên" />
      </Item>
      <Item fixedLabel last>
        <Icon name="calendar" type="AntDesign" />
        <DatePicker
          showIcon={false}
          date={'01-01-2020'}
          mode="date"
          placeholder="chọn ngày sinh"
          format="DD-MM-YYYY"
          minDate="1970-01-01"
          maxDate="2020-06-01"
          customStyles={{
            dateInput: {
              borderWidth: 0,
            },
          }}
        />
      </Item>
      <Item fixedLabel last picker>
        <Icon name="heart" type="AntDesign" />
        <Picker mode="dropdown" iosIcon={<Icon name="arrow-down" />}>
          <Picker.Item label="Nữ" value="f" />
          <Picker.Item label="Nam" value="m" />
        </Picker>
      </Item>
      <Item fixedLabel last>
        <Icon name="mail" type="AntDesign" />
        <TextInput placeholder="Icon Textbox" />
      </Item>
      <Item fixedLabel last>
        <Icon name="phone" type="AntDesign" />
        <TextInput
          style={{height: 40, borderWidth: 0}}
          placeholder="Icon Textbox"
          keyboardType="numeric"
        />
      </Item>
      <Item fixedLabel last>
        <Icon name="home" type="AntDesign" />
        <TextInput placeholder="Icon Textbox" />
      </Item>
      <Item fixedLabel last>
        <ButtonGreenCenter text="Cập nhật thông tin cá nhân" />
      </Item>
    </Form>
  );
};

const UserInfo = props => {
  const [order, setOrder] = useState(VIEW);

  const activeLoading = () => {
    setOrder(LOADING);
  };

  const activeView = () => {
    setOrder(VIEW);
  };

  const activeEdit = () => {
    setOrder(EDIT);
  };

  return (
    <MainHeader>
      <UserInfoTab one />
      <Content padder>
        <View style={styles.container}>
          <Logo
            source={require('../../../assest/logo.png')}
            style={{height: 200}}
          />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
          <View style={styles.body}>
            {order === EDIT ? (
              <EditUserInfo
                activeLoading={activeLoading}
                activeView={activeView}
              />
            ) : order === VIEW ? (
              <View style={styles.bodyContent}>
                <Text style={styles.name}>John Doe</Text>
                <Text>
                  <Image
                    style={styles.image}
                    source={require('../../../assest/salary.png')}
                  />
                  <Text style={styles.info}> Nữ / 26 tuổi</Text>
                </Text>
                <Text>
                  <Icon type="AntDesign" name="home" style={styles.icon} />
                  <Text style={styles.info}> Nữ / 26 tuổi</Text>
                </Text>
                <Text>
                  <Icon type="AntDesign" name="mail" style={styles.icon} />
                  <Text style={styles.info}> Nữ / 26 tuổi</Text>
                </Text>
                <Text>
                  <Icon type="AntDesign" name="phone" style={styles.icon} />
                  <Text style={styles.info}> Nữ / 26 tuổi</Text>
                </Text>
                <ButtonGreenCenter
                  text="Sửa thông tin cá nhân"
                  onPress={activeEdit}
                />
              </View>
            ) : (
              <Spinner />
            )}
          </View>
        </View>
      </Content>
    </MainHeader>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 10,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#8b929b',
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    color: '#8b929b',
    marginTop: 10,
  },
  icon: {
    fontSize: 32,
    color: '#8fbd40',
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#3397d5',
  },
});
