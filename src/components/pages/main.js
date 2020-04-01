import React, {useEffect} from 'react';
import MainHeader from '../../../menu';
import {Content} from 'native-base';
import {MenuTab, SimpleBlock} from '../organisms';
import * as cnt from '../../utilities/constants';
import firebase from 'react-native-firebase';

const Main = props => {
  const getToken = async () => {
    let fcmToken = await firebase.messaging().getToken();
    console.log(fcmToken);
  };

  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      getToken();
    } catch (error) {
      console.log('permission rejected');
    }
  };

  const createNotificationListener = () => {
    firebase.notifications().onNotification(notification => {
      notification.android.setChannelId('insider').setSound('default');
      firebase.notifications().displayNotification(notification);
    });
  };

  useEffect(() => {
    getToken();
    const channel = new firebase.notifications.Android.Channel(
      'insider',
      'insider channel',
      firebase.notifications.Android.Importance.Max,
    );
    firebase.notifications().android.createChannel(channel);
    checkPermission()
    createNotificationListener();
  }, []);

  return (
    <MainHeader>
      <MenuTab main />
      <Content padder>
        <SimpleBlock type={cnt.KHOAHOCTUYETVOI} />
        <SimpleBlock type={cnt.VIECGANBAN} />
        <SimpleBlock type={cnt.DNCANBAN} />
        <SimpleBlock type={cnt.BANLAAI} />
      </Content>
    </MainHeader>
  );
};

export default Main;
