import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo, ButtonGreenCenter} from '../atoms';
import {Icon, Content, Spinner, Card, CardItem} from 'native-base';
import MainHeader from '../../../menu';
import {UserInfoTab} from '../organisms';
import {EditUserInfoForm, ViewUser} from '../templates';
import axios from '../../utilities/axios';
import * as cnt from '../../utilities/constants';

import {BottomNavigation} from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const VIEW = 0;
const EDIT = 1;
const LOADING = 2;

const dataTrash = {
  name: 'Huấn hoa hồng',
  address: 'địa chỉ',
  avatar:
    'https://static.yeah1.com/uploads/editors/27/2020/01/02/5Vfs1y97vU84EdTBjGKC9t6GOJYLfaxOKiu9qKwb.png',
  avatarBackground:
    'https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png',
  tels: {id: 1, name: 'Mobile', number: '+66 (089)-928-2134'},
  email: {id: 1, name: 'Personal', email: 'elsie-goodman@mail.com'},
};

const UserInfo = props => {
  const [order, setOrder] = useState(VIEW);
  const [data, setData] = useState();
  const [nav, setNav] = useState({
    index: 0,
    routes: [
      {key: 'music', title: 'Music', icon: 'queue-music'},
      {key: 'albums', title: 'Albums', icon: 'album'},
      {key: 'recents', title: 'Recents', icon: 'history'},
    ],
  });

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

  const _handleIndexChange = index => {
    console.log(index);
    setNav({
      index: 1,
      ...nav,
    });
  };

  const _renderScene = ({route, jumpTo}) => {
    console.log(nav);
    switch (route.key) {
      case 'music':
        return <MusicRoute jumpTo={jumpTo} />;
      case 'albums':
        return <AlbumsRoute jumpTo={jumpTo} />;
    }
  };

  return (
    <MainHeader>
      {/* <UserInfoTab one /> */}
      <BottomNavigation
        navigationState={nav}
        onIndexChange={_handleIndexChange}
        renderScene={_renderScene}
      />
      {/* <Content padder>
        {data && order === EDIT ? (
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
            </View>
          </View>
        ) : data && order === VIEW ? (
          <ViewUser {...dataTrash} />
        ) : (
          <Spinner />
        )}
      </Content> */}
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
