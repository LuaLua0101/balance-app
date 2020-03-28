import React from 'react';
import MainHeader from '../../../menu';
import {Content} from 'native-base';
import {MenuTab, SimpleBlock, SearchBar, JobCard} from '../organisms';
import * as cnt from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';

const Job = props => {
  const navigation = useNavigation();

  const toViewAll = () => {
    navigation.navigate('JobViewAll');
  };

  return (
    <MainHeader>
      <MenuTab job />
      <SearchBar />
      <Content padder>
        <JobCard />
        <SimpleBlock type={cnt.KHOAHOCTUYETVOI} more={toViewAll} />
        <SimpleBlock type={cnt.VIECGANBAN} more={toViewAll} />
        <SimpleBlock type={cnt.DNCANBAN} more={toViewAll} />
        <SimpleBlock type={cnt.BANLAAI} more={toViewAll} />
      </Content>
    </MainHeader>
  );
};

export default Job;
