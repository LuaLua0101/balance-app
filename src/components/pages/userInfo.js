import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo, ButtonGreenCenter} from '../atoms';
import {Icon, Content, Spinner, Card, CardItem} from 'native-base';
import MainHeader from '../../../menu';
import {UserInfoTab} from '../organisms';
import {EditUserInfoForm} from '../templates';
import axios from '../../utilities/axios';
import * as cnt from '../../utilities/constants';

const VIEW = 0;
const EDIT = 1;
const LOADING = 2;

const UserInfo = props => {
  const [order, setOrder] = useState(VIEW);
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('getPersonalInfo').then(res => setData(res.data));
  }, []);

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
      {data && (
        <Content padder>
          <View style={styles.container}>
            <Logo
              source={require('../../../assets/logo.png')}
              style={{height: 200}}
            />
            <Image
              style={styles.avatar}
              source={{
                uri:
                  cnt.API_URL + 'public/admins/img/users' + '/' + data.avatar,
              }}
            />
            <View style={styles.body}>
              {data && order === EDIT ? (
                <View style={{marginTop: 40}}>
                  <EditUserInfoForm
                    activeLoading={activeLoading}
                    activeView={activeView}
                    {...data}
                    updateData={newData =>
                      setData({
                        ...data,
                        name: newData.name,
                        gender: newData.gender,
                        address: newData.address,
                        phone: newData.phone,
                        email: newData.email,
                      })
                    }
                  />
                </View>
              ) : data && order === VIEW ? (
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
                        <Text style={styles.name}>{data.name}</Text>
                        <Text>
                          <Icon
                            type="AntDesign"
                            name="user"
                            style={styles.icon}
                          />
                          <Text style={styles.info}>
                            {data.gender === 0 ? 'Nữ' : 'Nam'}
                          </Text>
                        </Text>
                        <Text>
                          <Icon
                            type="AntDesign"
                            name="user"
                            style={styles.icon}
                          />
                          <Text style={styles.info}>Ngày sinh: {data.dob}</Text>
                        </Text>
                        <Text>
                          <Icon
                            type="AntDesign"
                            name="home"
                            style={styles.icon}
                          />
                          <Text style={styles.info}>
                            Địa chỉ: {data.address}
                          </Text>
                        </Text>
                        <Text>
                          <Icon
                            type="AntDesign"
                            name="mail"
                            style={styles.icon}
                          />
                          <Text style={styles.info}> Email: {data.email}</Text>
                        </Text>
                        <Text>
                          <Icon
                            type="AntDesign"
                            name="phone"
                            style={styles.icon}
                          />
                          <Text style={styles.info}> SĐT: {data.phone}</Text>
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
      )}
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
