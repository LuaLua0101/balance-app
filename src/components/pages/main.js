import React, {useEffect} from 'react';
import MainHeader from '../../../menu';
import {Content} from 'native-base';
import {MenuTab, SimpleBlock} from '../organisms';
import * as cnt from '../../utilities/constants';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Main = props => {
  const navigation = useNavigation();
  const backButtonHandler = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
    };
  }, [backButtonHandler]);

  return (
    <MainHeader>
      <MenuTab main />
      <Content padder>
        <SimpleBlock type={cnt.KHOAHOCTUYETVOI} page="courses" />
        <SimpleBlock type={cnt.VIECGANBAN} page="jobs" />
        <SimpleBlock type={cnt.DNCANBAN} page="companies" />
        <SimpleBlock type={cnt.TESTBANLAAI} page="tests" />
      </Content>
    </MainHeader>
  );
};

export default Main;
