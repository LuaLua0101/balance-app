import React from 'react';
import MainHeader from '../../../menu';
import {
  Content,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Button,
  Thumbnail,
} from 'native-base';
import {UserInfoTab} from '../organisms';
import * as Progress from 'react-native-progress';
import {ButtonGreenCenter} from '../atoms';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CVList} from '../templates';

const MyCV = props => {
  const navigation = useNavigation();
  const openResult = () => {
    navigation.navigate('Result');
  };

  return (
    <MainHeader>
      <UserInfoTab two />
      <Content style={{height: 2700, backgroundColor: '#fff'}}>
        <CVList />
      </Content>
    </MainHeader>
  );
};

export default MyCV;
