import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Content, Spinner} from 'native-base';
import MainHeader from '../../../menu';
import {UserInfoTab, MenuTab} from '../organisms';
import {EditUserInfoForm, ViewUser} from '../templates';
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
      <MenuTab />
      <UserInfoTab one />
      <Content>
        {data && order === EDIT ? (
          <>
            <ImageBackground
              style={styles.headerBackgroundImage}
              blurRadius={10}
              source={{
                uri:
                  'https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png',
              }}>
              <View style={styles.headerColumn}>
                <Image
                  style={styles.userImage}
                  source={{
                    uri:
                      cnt.API_URL +
                      'public/admins/img/users' +
                      '/' +
                      data.avatar,
                  }}
                />
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
            </ImageBackground>
          </>
        ) : data && order === VIEW ? (
          <ViewUser {...data} edit={activeEdit} />
        ) : (
          <Spinner />
        )}
      </Content>
    </MainHeader>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  headerBackgroundImage: {height: null},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  userImage: {
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    // padding: 30,
  },
});
