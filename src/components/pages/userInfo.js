import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Logo} from '../atoms';
import {Icon, Content, Form, Item, Picker, Spinner} from 'native-base';
import {MainHeader} from '../../../menu';
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
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={props.activeView}>
          <Text style={{color: '#fff'}}>Cập nhật thông tin</Text>
        </TouchableOpacity>
      </Item>
    </Form>
  );
};

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {order: VIEW}; //view info screen
  }

  activeLoading = () => {
    this.setState({
      ...this.state,
      order: LOADING,
    });
  };

  activeView = () => {
    this.setState({
      ...this.state,
      order: VIEW,
    });
  };

  render() {
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
              {this.state.order === EDIT ? (
                <EditUserInfo
                  activeLoading={this.activeLoading}
                  activeView={this.activeView}
                />
              ) : this.state.order === VIEW ? (
                <View style={styles.bodyContent}>
                  <Text style={styles.name}>John Doe</Text>
                  <Text style={styles.info}>
                    <Icon type="AntDesign" name="user" style={styles.info} />
                    Nữ / 26 tuổi
                  </Text>
                  <Text style={styles.info}>
                    <Icon type="AntDesign" name="home" style={styles.info} />
                    Địa chỉ
                  </Text>
                  <Text style={styles.info}>
                    <Icon type="AntDesign" name="mail" style={styles.info} />
                    Email
                  </Text>
                  <Text style={styles.info}>
                    <Icon type="AntDesign" name="phone" style={styles.info} />
                    1234567890
                  </Text>
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() =>
                      this.setState({
                        ...this.state,
                        order: EDIT,
                      })
                    }>
                    <Text style={{color: '#fff'}}>Sửa thông tin cá nhân</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <Spinner />
              )}
            </View>
          </View>
        </Content>
      </MainHeader>
    );
  }
}

const styles = StyleSheet.create({
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
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#3397d5',
    marginTop: 10,
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
