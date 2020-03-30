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
        <SimpleBlock type={cnt.KHOAHOCTUYETVOI} more={toViewAll} />
        <SimpleBlock type={cnt.VIECGANBAN} more={toViewAll} />
        <SimpleBlock type={cnt.DNCANBAN} more={toViewAll} />
        <SimpleBlock type={cnt.BANLAAI} more={toViewAll} />
      </Content>
    </MainHeader>
  );
};

export default TestEbook;
