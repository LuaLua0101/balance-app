import React from 'react';
import MainHeader from '../../../menu';
import {Content} from 'native-base';
import {MenuTab, SimpleBlock, SearchBar} from '../organisms';
import * as cnt from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';

const TestEbook = props => {
  const navigation = useNavigation();

  const toViewAll = () => {
    navigation.navigate('TestViewAll');
  };
  return (
    <MainHeader>
      <MenuTab test />
      <SearchBar />
      <Content padder>
        <SimpleBlock
          type={cnt.KHOAHOCTUYETVOI}
          more={toViewAll}
          page="courses"
        />
        <SimpleBlock type={cnt.VIECGANBAN} more={toViewAll} page="jobs" />
        <SimpleBlock type={cnt.DNCANBAN} more={toViewAll} page="companies" />
        <SimpleBlock type={cnt.TESTBANLAAI} more={toViewAll} page="tests" />
      </Content>
    </MainHeader>
  );
};

export default TestEbook;
