import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Logo, ButtonGreenCenter, TextBox} from '../atoms';
import {
  Icon,
  Content,
  Form,
  Item,
  Picker,
  Spinner,
  Card,
  CardItem,
  Body,
} from 'native-base';
import MainHeader from '../../../menu';
import {UserInfoTab} from '../organisms';
import DatePicker from 'react-native-datepicker';
import {EditUserInfoForm} from '../templates';

const VIEW = 0;
const EDIT = 1;
const LOADING = 2;

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
            source={require('../../../assets/logo.png')}
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
              <View style={{marginTop: 40}}>
                <EditUserInfoForm
                  activeLoading={activeLoading}
                  activeView={activeView}
                />
              </View>
            ) : order === VIEW ? (
              <>
                <Card
                  style={{
                    marginTop: 30,
                    width: '80%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}>
                  <CardItem>
                    <View style={styles.bodyContent}>
                      <Text style={styles.name}>Họ tên </Text>
                      <Text>
                        <Icon
                          type="AntDesign"
                          name="user"
                          style={styles.icon}
                        />
                        <Text style={styles.info}> Nữ / 26 tuổi</Text>
                      </Text>
                      <Text>
                        <Icon
                          type="AntDesign"
                          name="home"
                          style={styles.icon}
                        />
                        <Text style={styles.info}> Địa chỉ nhà</Text>
                      </Text>
                      <Text>
                        <Icon
                          type="AntDesign"
                          name="mail"
                          style={styles.icon}
                        />
                        <Text style={styles.info}> Email</Text>
                      </Text>
                      <Text>
                        <Icon
                          type="AntDesign"
                          name="phone"
                          style={styles.icon}
                        />
                        <Text style={styles.info}> Số điện thoại</Text>
                      </Text>
                    </View>
                  </CardItem>
                </Card>
                <ButtonGreenCenter
                  text="Sửa thông tin cá nhân"
                  onPress={activeEdit}
                />
              </>
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
    fontSize: 26,
    color: '#8bc94d',
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
    backgroundColor: '#4dc4ff',
  },
});
