import React, {useEffect, useState} from 'react';
import MainHeader from '../../../menu';
import {Content} from 'native-base';
import {
  MenuTab,
  SimpleBlock,
  SearchBar,
  JobCard,
  PinnedJobCard,
} from '../organisms';
import * as cnt from '../../utilities/constants';
import {useNavigation} from '@react-navigation/native';
import axios from '../../utilities/axios';

const Job = props => {
  const navigation = useNavigation();
  const [data, setData] = useState();

  const toViewAll = () => {
    navigation.navigate('JobViewAll');
  };

  useEffect(() => {
    axios
      .get('getJob4U')
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.data);
          setData(res.data.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <MainHeader>
      <MenuTab job />
      <SearchBar />
      <Content>
        <PinnedJobCard data={data} />
        <SimpleBlock type={cnt.VIECHOT} more={toViewAll} page="jobs" />
        <SimpleBlock type={cnt.VIECMOI} more={toViewAll} page="jobs" />
        <SimpleBlock type={cnt.VIECQUANLYCANBAN} more={toViewAll} page="jobs" />
        <SimpleBlock
          type={cnt.KHOAHOCHANHPHUC}
          more={toViewAll}
          page="courses"
        />
        <SimpleBlock
          type={cnt.TESTEBOOKTANGLUONG}
          more={toViewAll}
          page="tests"
        />
      </Content>
    </MainHeader>
  );
};

export default Job;
